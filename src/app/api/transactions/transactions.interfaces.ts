export interface Span {
  spanId: string;
  parentSpanId: string;
  op: string;
  description: string;
  startTimestamp: string;
  timestamp: string;
  tags?: { [key: string]: string | null } | null;
  data?: { [key: string]: string | null } | null;
}

export interface TransactionBase {
  transaction: string;
  op: string;
  method: string | null;
}

export interface Transaction extends TransactionBase {
  eventId: string;
  timestamp: string;
  startTimestamp: string;
}

export interface TransactionDetail extends TransactionBase {
  spans: Span[]
}

export interface TransactionGroup extends TransactionBase{
  project: number;
  avgDuration: number;
  transactionCount: number;
}

export interface TransactionWithDelta extends Transaction {
  delta: number;
}
