/**
 * RaceControlMessage: object returned by the race_control endpoint. Looks like:
 *  {
 *    session_key: 9523,
 *    meeting_key: 1236,
 *    date: '2024-05-26T15:08:28+00:00',
 *    category: 'Flag',
 *    flag: 'BLUE',
 *    lap_number: 64,
 *    message: 'WAVED BLUE FLAG FOR CAR 22 (TSU) TIMED AT 17:08:28',
 *    driver_number: 22,
 *    scope: 'Driver',
 *    sector: null
 *  }
 */

// export class RaceControlMessage {
//     private session_key: number;
//     private meeting_key: number;
//     private date: number;
//     private

//     static from(json: any){
//         return Object.assign(new RaceControlMessage(), json);
//       }

//     public getMessage(): string {
//         return this.message;
//     }
// }
