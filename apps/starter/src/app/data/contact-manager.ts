const selectId = it => it.id;

export class ContactManager<T> {
  private _contacts: Array<T> = [];

  get contacts() {
    return [...this._contacts];
  }

  constructor(data: Array<T> = [], private selectIdFn) {
    this._contacts = [...data];
  }

  add(contact: T) {
    this._contacts.push(contact);
  }

  update(contact: T) {
    const contactId = selectId(contact);
    const index = this._contacts.findIndex(c => selectId(c) === contactId);
    if (index === -1) {
      throw new Error(
        `Trying to update item that doesn't exist with ID: ${contactId}!`
      );
    }
    this._contacts[index] = contact;
  }

  get(id: number) {
    const contact = this.contacts.find(selectId);
    return contact ? contact : null;
  }

  getAll() {
    return this.contacts;
  }
}
