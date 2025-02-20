"use client"

import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

interface CustomDatePickerProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
}

export function CustomDatePicker({ date, setDate }: CustomDatePickerProps) {
  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date || undefined)}
      dateFormat="MMMM d, yyyy"
      placeholderText="Select a date"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#66e8fd] focus:ring-2 focus:ring-[#66e8fd] focus:ring-opacity-20 transition-colors"
      wrapperClassName="w-full"
      showPopperArrow={false}
      minDate={new Date()}
      customInput={
        <input
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#66e8fd] focus:ring-2 focus:ring-[#66e8fd] focus:ring-opacity-20 transition-colors"
        />
      }
    />
  )
} 