export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, age, gender, address, pincode, email, contact, appointmentTime, date } = req.body;

    if (!name || !email || !contact || !date || !appointmentTime) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Simulate saving the appointment in a database
    const appointmentId = `appt_${Date.now()}`;

    res.status(200).json({ appointmentId, message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ message: "Failed to book appointment" });
  }
}
