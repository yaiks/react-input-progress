import { useEffect, useState } from 'react'

interface IGlossary {
  'x-sm': number[],
  'sm': number[],
  'md': number[],
  'lg': number[],
  'x-lg': number[],
}

type InputProgressTypes = {
  input: string;
  maxLength: number;
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'x-lg';
  progressColor?: string;
  circleColor?: string;
  strokeWidth?: number;
}

const glossary:IGlossary = {
  'x-sm': [30, 10],
  'sm': [40, 15],
  'md': [50, 20],
  'lg': [60, 25],
  'x-lg': [80, 35]
}

function InputProgress({
  input,
  maxLength,
  size = 'sm',
  progressColor = '#5b77e6',
  circleColor = '#e5e5e5',
  strokeWidth = 4,
}: InputProgressTypes) {
  const [dimension, radius] = glossary[size]
  const circumference = 2 * Math.PI * radius;
  const circumferenceSlice = (circumference / radius) * (radius / maxLength)


  const [progressStyle, setProgressStyle] = useState(circumference)

  useEffect(() => {
    setProgressStyle(circumference - (circumferenceSlice * input.length))
  }, [input.length, circumference, circumferenceSlice])

  return (
    <svg className="react-input-progress" style={{transform: "rotate(-90deg)", strokeLinecap: "round" }} width={dimension} height={dimension}>
      <circle
        cx={dimension / 2}
        cy={dimension / 2}
        r={radius}
        stroke={circleColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={dimension / 2}
        cy={dimension / 2}
        r={radius}
        stroke={progressColor}
        strokeWidth={strokeWidth}
        fill="none"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: progressStyle,
        }}
      />
    </svg>
  )
}

export default InputProgress
