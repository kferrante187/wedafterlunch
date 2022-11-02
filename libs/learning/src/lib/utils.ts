export function sendReminder(who: ReminderRecipient) {
  console.log(`Sending a reminder to ${who.name}`);
  console.log(` -> emailing ${who.email}`);
  who.sendEmail();
}

export type ReminderRecipient = {
  name: string;
  email: string;
  sendEmail: () => void;
};

type Person = {
  name: string;
};

export type Employee = Person & {
  salary: number;
  pension?: never;
};

export type Retiree = Person & {
  pension: number;
  salary?: never;
};

export type Worker = Employee | Retiree;

export function giveRaise(worker: Worker, amount: number) {
  if (worker.salary) {
    return {
      ...worker,
      salary: worker.salary + amount,
    } as Employee;
  } else if (worker.pension) {
    return {
      ...worker,
      pension: worker.pension + amount,
    } as Retiree;
  }
  return undefined;
}
