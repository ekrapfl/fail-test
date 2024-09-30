import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input, signal } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { injectQuery } from "@tanstack/angular-query-experimental";

export type TabKey = "first" | "second" | "third";

@Component({
  selector: "app-success",
  template: `
    <ion-label>ion-label is present</ion-label>
    <div class="first" [class.selected]="selectedTab() === 'first'" (click)="selectedTab.set('first')">first</div>
    <div class="second" [class.selected]="selectedTab() === 'second'" (click)="selectedTab.set('second')">second</div>
    <div class="third" [class.selected]="selectedTab() === 'third'" (click)="selectedTab.set('third')">third</div>
  `,
  styles: [":host { display: block; }", ".selected { color: red; }"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonicModule],
})
export class SuccessComponent {
  constructor() {
    (window as any).cdr = inject(ChangeDetectorRef);
  }

  tabKeys = input<TabKey[]>(["first", "second", "third"]);
  selectedTab = signal<TabKey>("first");

  recordTabQuery = injectQuery(() => ({ queryKey: ["NotARealQuery"], queryFn: () => "hi" }));
}
