'use client'

export function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d21.2233!3d45.7891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47456789abcdef01%3A0x123456789abcdef0!2sStr.%20Liviu%20Rebreanu%20161%2C%20Dumbr%C4%83vi%C8%9Ba%20307160%2C%20Romania!5e0!3m2!1sen!2sro!4v1234567890123!5m2!1sen!2sro"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

