export { };

declare global {
  interface Person {
    name: string
    parents: string
  }

  interface SingleEvent {
    name: string
    descriptions: string[]
  }

  interface Events {
    events: SingleEvent[]
  }

  interface Data {
    title: string
    groom: Person
    bride: Person
    events: Events
    invited?: string
  }
}
