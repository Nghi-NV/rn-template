import React, { useMemo } from 'react';
import { View, StyleSheet, type DimensionValue } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

export interface SkeletonProps {
  animation?: 'pulse' | 'wave' | 'none';
  children?: React.ReactNode;
  height?: DimensionValue;
  width?: DimensionValue;
  loading?: boolean;
  overlay?: boolean;
  variant?: 'overlay' | 'circular' | 'rectangular' | 'text' | 'inline';
  borderRadius?: number;
  backgroundColor?: string;
  highlightColor?: string;
}

const DEFAULT_BG = '#E1E3E8';
const DEFAULT_HIGHLIGHT = 'rgba(255,255,255,0.45)';

function usePulseStyle(enabled: boolean) {
  const progress = useSharedValue(0);
  useMemo(() => {
    if (!enabled) return;
    progress.value = withRepeat(
      withTiming(1, { duration: 900, easing: Easing.inOut(Easing.quad) }),
      -1,
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return useAnimatedStyle(() => {
    if (!enabled) return {};
    const opacity = 0.65 + 0.35 * progress.value;
    return { opacity };
  });
}

function useWaveStyle(enabled: boolean) {
  const translate = useSharedValue(-1);
  useMemo(() => {
    if (!enabled) return;
    translate.value = withRepeat(
      withTiming(1, { duration: 1200, easing: Easing.inOut(Easing.quad) }),
      -1,
      false
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  const animatedStyle = useAnimatedStyle(() => {
    if (!enabled) return {};
    return {
      transform: [{ translateX: translate.value * 100 + '%' as unknown as number }],
    };
  });

  return animatedStyle;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  animation = 'pulse',
  children = null,
  height = 12,
  width = '100%',
  loading = true,
  overlay = false,
  variant = 'rectangular',
  borderRadius,
  backgroundColor = DEFAULT_BG,
  highlightColor = DEFAULT_HIGHLIGHT,
}) => {
  const isOverlayVariant = variant === 'overlay' || overlay;
  const containerStyle = useMemo(() => [styles.container], []);

  const shapeStyle = useMemo(() => {
    const base: any = {
      height,
      width,
      backgroundColor,
      overflow: 'hidden',
      borderRadius: borderRadius ?? (variant === 'circular' ? 9999 : variant === 'text' ? 6 : 10),
    };
    if (variant === 'text') {
      base.height = height ?? 12;
      base.width = width ?? '60%';
    }
    if (variant === 'inline') {
      base.height = height ?? 10;
      base.width = width ?? 10;
      base.borderRadius = borderRadius ?? 9999;
    }
    if (isOverlayVariant) {
      base.position = 'absolute';
      base.top = 0;
      base.left = 0;
      base.right = 0;
      base.bottom = 0;
      base.width = undefined;
      base.height = undefined;
    }
    return base;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width, backgroundColor, borderRadius, variant, isOverlayVariant]);

  const pulseStyle = usePulseStyle(animation === 'pulse');
  const waveTranslateStyle = useWaveStyle(animation === 'wave');

  const content = (
    <View style={containerStyle}>
      <Animated.View style={[shapeStyle, pulseStyle]}>
        {animation === 'wave' && (
          <View style={styles.waveContainer} pointerEvents="none">
            <Animated.View style={[styles.wave, { backgroundColor: highlightColor }, waveTranslateStyle]} />
          </View>
        )}
      </Animated.View>
    </View>
  );

  if (!loading) return <>{children}</>;

  if (overlay || variant === 'overlay') {
    return (
      <View style={styles.overlayRoot}>
        {children}
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          {content}
        </View>
      </View>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  waveContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  wave: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '35%',
    opacity: 0.65,
  },
  overlayRoot: {
    position: 'relative',
  },
});

export default Skeleton;
