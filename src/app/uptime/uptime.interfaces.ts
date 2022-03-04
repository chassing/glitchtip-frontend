export type MonitorType = "Ping" | "GET" | "POST" | "Heartbeat";
export enum DownReason {
  UNKNOWN = 0,
  TIMEOUT = 1,
  STATUS = 2,
  BODY = 3,
  SSL = 4,
  NETWORK = 5
}

export interface MonitorInput {
  monitorType: MonitorType;
  name: string;
  url: string;
  expectedStatus: number;
  interval: string;
  project: number | null;
}

export interface MonitorDetail extends MonitorInput {
  id: string;
  projectName: string | null;
  isUp: boolean | null;
  lastChange: string | null;
  heartbeatEndpoint: string | null;
}

export interface MonitorCheck {
  isUp: boolean;
  startCheck: string;
  reason: DownReason | null;
  responseTime: string | null;
}
