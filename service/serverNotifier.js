const GameEvent = {
   System: 'system',
   join: 'joinPantry',
   leave: 'leavePantry',
   modify: 'modifyPantry',
 };
 
 class EventMessage {
   constructor(from, type, value) {
     this.from = from;
     this.type = type;
     this.value = value;
   }
 }
 
 // The backend version. No window, no browser WebSocket.
 class ServerNotifier {
   constructor(wss) {
     this.wss = wss;
   }
 
   broadcastEvent(from, type, value) {
     const event = new EventMessage(from, type, value);
     const json = JSON.stringify(event);
 
     this.wss.clients.forEach((client) => {
       if (client.readyState === 1) {
         client.send(json);
       }
     });
   }
 }
 
 module.exports = { GameEvent, ServerNotifier };
 