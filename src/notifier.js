const GameEvent = {
  System: 'system',
  join: 'joinPantry',
  leave: 'leavePantry',
  modify: 'modifyPantry',
  new: 'newPantry',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const host = window.location.host;
    this.socket = new WebSocket(`${protocol}://${host}/ws`);
    this.socket.onopen = (event) => {
      this.receiveEvent(new EventMessage('Startup', GameEvent.System, { msg: 'connected' }));
    };
    this.socket.onclose = (event) => {
      this.receiveEvent(new EventMessage('Startup', GameEvent.System, { msg: 'disconnected' }));
    };
    this.socket.onmessage = (msg) => {
      try {
        const event = JSON.parse(msg.data);
        this.receiveEvent(event);
      } catch (err) {
        console.error("WS parse error:", err, msg.data);
      }
    };
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.socket.send(JSON.stringify(event));
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => handler(event));
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
