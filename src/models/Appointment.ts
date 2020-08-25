import { uuid } from 'uuidv4';

class Appointment {
    private id: string;

    private provider: string;

    private date: Date;

    constructor(provider: string, date: Date) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;
