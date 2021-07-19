import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MultiFactorAuthService } from "./multi-factor-auth.service";

@Component({
  selector: "app-multi-factor-auth",
  templateUrl: "./multi-factor-auth.component.html",
  styleUrls: ["./multi-factor-auth.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiFactorAuthComponent implements OnInit {
  userKeys$ = this.service.userKeys$;
  constructor(private service: MultiFactorAuthService) {}

  ngOnInit() {
    this.service.getUserKeys().subscribe();
  }
}
