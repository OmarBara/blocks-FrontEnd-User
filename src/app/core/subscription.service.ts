import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SubscriptionService {
  sub;
  status: boolean;

  constructor() {}
}
