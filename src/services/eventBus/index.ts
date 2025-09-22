import { NConsole } from 'react-native-nconsole';

type EventHandler<T = any> = (payload: T) => void;

class EventBus {
  private listeners = new Map<string, Set<EventHandler>>();

  /**
   * register handler for event
   * @param event - event name
   * @param handler - handler function
   */
  public on<T = any>(event: string, handler: EventHandler<T>): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(handler as EventHandler);
  }

  /**
   * unregister handler. if not pass handler, will remove all for event
   * @param event - event name
   * @param handler - handler function
   */
  public off<T = any>(event: string, handler?: EventHandler<T>): void {
    if (!this.listeners.has(event)) { return; }

    if (handler) {
      this.listeners.get(event)!.delete(handler as EventHandler);
    } else {
      this.listeners.delete(event);
    }
  }

  /**
   * register handler only run 1 time, then remove
   * @param event - event name
   * @param handler - handler function
   */
  public once<T = any>(event: string, handler: EventHandler<T>): void {
    const wrapper = (payload: T) => {
      handler(payload);
      this.off(event, wrapper as EventHandler);
    };
    this.on(event, wrapper as EventHandler<T>);
  }

  /**
   * emit event with payload (payload can be any object)
   * @param event - event name
   * @param payload - payload
   */
  public emit<T = any>(event: string, payload?: T): void {
    const handlers = this.listeners.get(event);
    if (!handlers) { return; }

    // copy to array to prevent one handler call off/on
    Array.from(handlers).forEach(fn => {
      try {
        fn(payload as T);
      } catch (err) {
        NConsole.error(`Error in handler for event "${event}":`, err);
      }
    });
  }
}

export const eventBus = new EventBus();
