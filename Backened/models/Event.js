import mongoose from "mongoose";

const Event = new mongoose.Schema({
    EventName: { type: String, required: true, minlength: [1, 'Event name must be at least 1 characters long'], maxlength: [50, 'Event name must be at most 50 characters long'] },
    EventDateAndTime: {type : String, required: true, minlength: [1, 'Event date and time must be provided'], maxlength: [100, 'Event date and time must be at most 100 characters long'] },
    ConductedBy: { type: String, required: true, minlength: [1, 'Conducted by must be provided'], maxlength: [50, 'Conducted by must be at most 50 characters long'] },
    EventInfo: { type: String, required: true, minlength: [1, 'Event info must be provided'], maxlength: [500, 'Event info must be at most 500 characters long'] }
  }, { timestamps: true });

export const event_ = mongoose.model('Event', Event);