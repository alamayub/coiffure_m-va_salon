import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../components/ui/Button";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Scissors,
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  Trash2,
} from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  phone: string;
  service: string;
  stylist: string;
  date: string; // YYYY-MM-DD
  time: string;
  createdAt: string;
}

const SERVICES = [
  {
    id: "1",
    name: "Balayage & Color",
    duration: "180 min",
    price: "From 180€",
  },
  {
    id: "2",
    name: "Haircut & Sculpting",
    duration: "60 min",
    price: "From 85€",
  },
  {
    id: "3",
    name: "Bridal Artistry",
    duration: "120 min",
    price: "Consultation Required",
  },
  { id: "4", name: "Hair Treatment", duration: "45 min", price: "From 60€" },
  { id: "5", name: "Blow Dry & Style", duration: "45 min", price: "From 45€" },
  { id: "6", name: "Consultation", duration: "30 min", price: "Complimentary" },
];

const STYLISTS = [
  { name: "Mélanie Valeri", role: "Founder & Master Stylist" },
  { name: "Alessandra Dupont", role: "Senior Stylist" },
  { name: "Julian Moretti", role: "Art Director" },
];

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export const BookingPage = () => {
  // Local storage appointments
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Form State
  const [selectedService, setSelectedService] = useState(SERVICES[0].name);
  const [selectedStylist, setSelectedStylist] = useState(STYLISTS[0].name);

  // Custom Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Skip if tomorrow is Sunday
    if (tomorrow.getDay() === 0) {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    return tomorrow;
  });

  const [selectedTime, setSelectedTime] = useState("10:00");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load existing appointments from localStorage on mount
  useEffect(() => {
    const cached = localStorage.getItem("coiffure_meva_bookings");
    if (cached) {
      try {
        setAppointments(JSON.parse(cached));
      } catch (e) {
        console.error("Error parsing cached bookings", e);
      }
    }
  }, []);

  // Calendar Helpers
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday, 1 is Monday

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate calendar days
  const calendarCells = [];
  // Empty slots for days before 1st of month
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null);
  }
  // Days of month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarCells.push(new Date(year, month, i));
  }

  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const isPast = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  };

  const isSunday = (d: Date) => {
    return d.getDay() === 0;
  };

  // Submission handler
  const handleBook = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      setErrorMsg("Please select an appointment date.");
      return;
    }
    if (!clientName.trim()) {
      setErrorMsg("Full name is required.");
      return;
    }
    if (!clientPhone.trim()) {
      setErrorMsg("Phone number is required.");
      return;
    }

    const formattedDate = selectedDate.toISOString().split("T")[0];

    // Check if the stylist is already booked for that specific date & time
    const slotTaken = appointments.some(
      (appt) =>
        appt.date === formattedDate &&
        appt.time === selectedTime &&
        appt.stylist === selectedStylist,
    );

    if (slotTaken) {
      setErrorMsg(
        `Unfortunately, ${selectedStylist} is already booked at ${selectedTime} on ${formattedDate}. Please try another time slot.`,
      );
      return;
    }

    setErrorMsg("");

    const newAppt: Appointment = {
      id: Math.random().toString(36).substring(2, 9),
      name: clientName,
      phone: clientPhone,
      service: selectedService,
      stylist: selectedStylist,
      date: formattedDate,
      time: selectedTime,
      createdAt: new Date().toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedAppts = [newAppt, ...appointments];
    setAppointments(updatedAppts);
    localStorage.setItem(
      "coiffure_meva_bookings",
      JSON.stringify(updatedAppts),
    );

    // Reset form fields
    setClientName("");
    setClientPhone("");
    setBookingSuccess(true);
  };

  const deleteAppointment = (id: string) => {
    const updated = appointments.filter((appt) => appt.id !== id);
    setAppointments(updated);
    localStorage.setItem("coiffure_meva_bookings", JSON.stringify(updated));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-beige min-h-screen text-luxury-black pt-24"
    >
      {/* Banner */}
      <div className="py-12 bg-white/40 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase block mb-2">
            Reservations
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Schedule Your Treatment
          </h1>
          <p className="text-luxury-black/60 max-w-md mx-auto text-sm mt-4 font-light">
            Each booking is treated with exclusive customization. Secure your
            spot on our digital appointment book.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Reservation Panel: Calendars and inputs */}
          <div className="lg:col-span-8 bg-white border border-gold/10 p-6 md:p-10 shadow-sm space-y-10">
            {bookingSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-6"
              >
                <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto text-gold">
                  <CalendarCheck size={32} />
                </div>
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl">Appointment Requested</h2>
                  <p className="text-sm font-light text-luxury-black/60 max-w-md mx-auto">
                    We have successfully recorded your preferred appointment on
                    our register. A consultant will review your selection and
                    contact you if adjustments are necessary.
                  </p>
                </div>

                <div className="bg-beige/50 p-6 max-w-sm mx-auto text-left space-y-3 rounded-xs border border-gold/10">
                  <div className="flex justify-between text-xs border-b border-gold/5 pb-2">
                    <span className="text-luxury-black/50 uppercase tracking-widest font-mono">
                      Service:
                    </span>
                    <span className="font-semibold text-right">
                      {selectedService}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-gold/5 pb-2">
                    <span className="text-luxury-black/50 uppercase tracking-widest font-mono">
                      Stylist:
                    </span>
                    <span className="font-semibold text-right">
                      {selectedStylist}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-gold/5 pb-2">
                    <span className="text-luxury-black/50 uppercase tracking-widest font-mono">
                      Date:
                    </span>
                    <span className="font-semibold text-right">
                      {selectedDate?.toISOString().split("T")[0]}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-luxury-black/50 uppercase tracking-widest font-mono">
                      Time Slot:
                    </span>
                    <span className="font-semibold text-right text-gold">
                      {selectedTime}
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setBookingSuccess(false)}
                  className="mt-4"
                >
                  Schedule Another Session
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleBook} className="space-y-8">
                {/* 1. Service selection */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gold">
                    <Scissors size={18} />
                    <h3 className="font-serif text-xl text-luxury-black">
                      1. Choose Treatment
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {SERVICES.map((serv) => (
                      <button
                        key={serv.id}
                        type="button"
                        onClick={() => setSelectedService(serv.name)}
                        className={`p-4 border transition-all text-left flex flex-col justify-between h-[110px] ${
                          selectedService === serv.name
                            ? "border-gold bg-beige"
                            : "border-gold/10 hover:border-gold/30"
                        }`}
                      >
                        <span className="text-xs font-semibold tracking-wide block">
                          {serv.name}
                        </span>
                        <div className="flex justify-between items-end w-full text-[10px] font-mono uppercase tracking-widest text-luxury-black/50">
                          <span>{serv.duration}</span>
                          <span className="text-gold font-serif normal-case italic font-semibold">
                            {serv.price}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Stylist Selection */}
                <div className="space-y-4 pt-6 border-t border-gold/10">
                  <div className="flex items-center space-x-2 text-gold">
                    <User size={18} />
                    <h3 className="font-serif text-xl text-luxury-black">
                      2. Preferred Stylist
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {STYLISTS.map((stylist) => (
                      <button
                        key={stylist.name}
                        type="button"
                        onClick={() => setSelectedStylist(stylist.name)}
                        className={`p-4 border text-left transition-all relative ${
                          selectedStylist === stylist.name
                            ? "border-gold bg-beige"
                            : "border-gold/10 hover:border-gold/30"
                        }`}
                      >
                        <p className="text-xs font-bold leading-tight uppercase tracking-widest">
                          {stylist.name}
                        </p>
                        <p className="text-[10px] text-luxury-black/50 font-light mt-1">
                          {stylist.role}
                        </p>
                        {selectedStylist === stylist.name && (
                          <div className="absolute top-2 right-2 text-gold">
                            <Check size={14} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Calendar View */}
                <div className="space-y-4 pt-6 border-t border-gold/10">
                  <div className="flex items-center space-x-2 text-gold">
                    <CalendarIcon size={18} />
                    <h3 className="font-serif text-xl text-luxury-black">
                      3. Select Appointment Date
                    </h3>
                  </div>

                  {/* Visual Calendar UI */}
                  <div className="border border-gold/15 bg-beige/30 p-4 rounded-xs max-w-md mx-auto">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-1.5 hover:bg-gold/10 text-gold hover:text-luxury-black transition-colors rounded-full"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className="font-serif text-lg tracking-wider font-semibold">
                        {monthNames[month]} {year}
                      </span>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1.5 hover:bg-gold/10 text-gold hover:text-luxury-black transition-colors rounded-full"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    {/* Weekday Titles */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <span
                          key={day}
                          className="text-[10px] uppercase font-mono tracking-widest font-semibold text-luxury-black/40"
                        >
                          {day}
                        </span>
                      ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {calendarCells.map((dateObj, index) => {
                        if (!dateObj) {
                          return <div key={`empty-${index}`} />;
                        }

                        const past = isPast(dateObj);
                        const disabled = isSunday(dateObj);
                        const isSelected = selectedDate
                          ? isSameDay(dateObj, selectedDate)
                          : false;

                        return (
                          <button
                            key={dateObj.toISOString()}
                            type="button"
                            disabled={past || disabled}
                            onClick={() => setSelectedDate(dateObj)}
                            className={`
                              aspect-square text-xs font-mono transition-all flex flex-col items-center justify-center relative
                              ${past || disabled ? "opacity-20 cursor-not-allowed line-through" : ""}
                              ${isSelected ? "bg-gold text-white font-bold scale-105 shadow-md" : "hover:bg-gold/10"}
                            `}
                          >
                            <span>{dateObj.getDate()}</span>
                            {disabled && (
                              <span className="absolute bottom-0 text-[6px] text-red-500 uppercase font-bold tracking-tight">
                                Closed
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="text-center text-xs text-luxury-black/50 italic font-light">
                    Note: The Salon is closed on Sundays. Appointments cannot be
                    scheduled for past dates.
                  </div>
                </div>

                {/* 4. Time Selection */}
                <div className="space-y-4 pt-6 border-t border-gold/10">
                  <div className="flex items-center space-x-2 text-gold">
                    <Clock size={18} />
                    <h3 className="font-serif text-xl text-luxury-black">
                      4. Select Time
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 max-w-2xl">
                    {TIME_SLOTS.map((slot) => {
                      const isTimeSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2 text-xs font-mono transition-all border ${
                            isTimeSelected
                              ? "border-gold bg-gold text-white font-bold"
                              : "border-gold/10 hover:border-gold/30 hover:bg-gold/5"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Client Details input (Name & Phone requested explicitly) */}
                <div className="space-y-4 pt-6 border-t border-gold/10">
                  <div className="flex items-center space-x-2 text-gold">
                    <User size={18} />
                    <h3 className="font-serif text-xl text-luxury-black">
                      5. Patient Information
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/60 ml-1 flex items-center">
                        <User size={12} className="mr-1.5 text-gold" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Jean Dupont"
                        className="w-full bg-beige/30 border border-gold/15 p-4 text-sm font-light focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/60 ml-1 flex items-center">
                        <Phone size={12} className="mr-1.5 text-gold" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="e.g. +352 691 123 456"
                        className="w-full bg-beige/30 border border-gold/15 p-4 text-sm font-light focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-700 text-xs text-center border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="pt-6 border-t border-gold/10">
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full shadow-lg"
                  >
                    Confirm Golden Reservation
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Bookings Overview Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-luxury-black text-white p-6 md:p-8 space-y-6">
              <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase block">
                Assistance
              </span>
              <h3 className="font-serif text-2xl tracking-tight leading-tight">
                Salon Guidelines
              </h3>
              <ul className="space-y-3 text-xs font-light text-warm-gray/70 leading-relaxed">
                <li>• Please arrive 5 minutes prior to appointment time.</li>
                <li>
                  • Rescheduling can be processed up to 24 hours in advance with
                  negligible fees.
                </li>
                <li>
                  • Compliant sanitization and refreshments are served
                  throughout the beauty treatment.
                </li>
              </ul>
            </div>

            {/* Upcoming Appointments stored locally */}
            <div className="bg-white border border-gold/10 p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-luxury-black/5 pb-4">
                <h4 className="font-serif text-lg">My Appointments</h4>
                <span className="text-gold bg-gold/10 px-2 py-0.5 rounded-full text-[10px] font-mono">
                  {appointments.length} Status
                </span>
              </div>

              {appointments.length === 0 ? (
                <div className="text-center py-6 text-xs text-luxury-black/40 font-light italic">
                  No upcoming reservations. Schedule your session to explore
                  Méva's artistic magic.
                </div>
              ) : (
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                  <AnimatePresence initial={false}>
                    {appointments.map((appt) => (
                      <motion.div
                        key={appt.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-beige/40 p-4 border border-gold/5 relative group hover:border-gold/30 transition-all rounded-xs"
                      >
                        <button
                          onClick={() => deleteAppointment(appt.id)}
                          className="absolute top-3 right-3 text-luxury-black/30 hover:text-red-500 transition-colors"
                          title="Cancel Reservation"
                        >
                          <Trash2 size={14} />
                        </button>

                        <div className="space-y-2 pr-4">
                          <p className="text-[10px] font-mono text-gold font-bold uppercase tracking-widest">
                            {appt.date} @ {appt.time}
                          </p>
                          <h5 className="font-semibold text-xs text-luxury-black truncate">
                            {appt.service}
                          </h5>

                          <div className="pt-2 text-[10px] text-luxury-black/60 font-light space-y-1">
                            <p>
                              <span className="font-semibold">Stylist:</span>{" "}
                              {appt.stylist}
                            </p>
                            <p>
                              <span className="font-semibold">Guest:</span>{" "}
                              {appt.name}
                            </p>
                            <p>
                              <span className="font-semibold">Phone:</span>{" "}
                              {appt.phone}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
