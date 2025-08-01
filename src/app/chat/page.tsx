"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/shared/Navbar"

export default function App() {
  const [messages, setMessages] = useState([
    { role: "system", content: "Ask me anything to plan your study." },
  ])
  const [input, setInput] = useState("")
  const [topics, setTopics] = useState<string[]>([])
  const [dividerX, setDividerX] = useState(400)
  const isDragging = useRef(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        setDividerX(Math.max(200, Math.min(window.innerWidth - 200, e.clientX)))
      }
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage = { role: "user", content: input }
    setMessages([...messages, newMessage])

    const aiResponse = {
      role: "assistant",
      content: `Great! Here's a breakdown of "${input}" into study chunks.`,
    }
    setMessages(prev => [...prev, aiResponse])
    setTopics([
      `${input} - Introduction`,
      `${input} - Core Concepts`,
      `${input} - Examples`,
      `${input} - Practice Exercises`,
    ])
    setInput("")
  }

  return (
    <div className="min-h-screen bg-[#f5e9ff] bg-[linear-gradient(to_right,_rgba(227,209,250,0.3)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(227,209,250,0.3)_1px,_transparent_1px)] [background-size:32px_32px] flex relative">
      <Navbar />
      <div className="flex flex-1 relative pt-14">
        {/* Left - Chat */}
        <div style={{ width: dividerX }} className="border-r border-border/40 flex flex-col bg-white/60 backdrop-blur-md rounded-r-3xl shadow-lg overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-3">
            {messages.map((msg, i) => (
              <Card key={i} className={msg.role === "user" ? "ml-auto w-fit bg-gradient-to-r from-primary/10 to-purple-100" : "w-fit bg-gradient-to-r from-gray-100 to-purple-50"}>
                <CardContent className="p-4 text-base font-medium">
                  {msg.content}
                </CardContent>
              </Card>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-3 p-3 bg-card rounded-2xl m-4 shadow-large border border-border/50 backdrop-blur-sm"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your study topic..."
              className="border-0 bg-transparent text-base placeholder:text-muted-foreground/70 focus-visible:ring-0 flex-1 h-12 rounded-xl px-4 shadow-none"
            />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="h-12 rounded-xl px-6 shadow-none bg-gradient-to-r from-primary to-purple-400 text-white border-0 hover:from-primary/90 hover:to-purple-400/90 transition-colors"
            >
              Send
            </Button>
          </form>
        </div>

        {/* Resizer */}
        <div
          onMouseDown={() => (isDragging.current = true)}
          className="w-1 bg-purple-200 cursor-col-resize"
          style={{ height: "100%" }}
        />

        {/* Right - Topics */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-purple-700">Study Plan</h2>
          <Accordion type="multiple">
            {topics.map((topic, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg font-semibold text-purple-600 bg-purple-50 rounded-xl px-4 py-2 mb-2 shadow-sm hover:bg-purple-100 transition-colors">
                  {topic}
                </AccordionTrigger>
                <AccordionContent className="bg-white/80 rounded-xl px-4 py-3 mb-4 shadow-inner">
                  Detailed content for: {topic}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}