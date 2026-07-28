import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { SquigglyText } from "@/components/ui/squiggly-text"
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "@formspree/react"
import { Spinner } from "@/components/ui/spinner"

export default function ContactPreview() {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="mb-10 h-96 w-full content-center bg-white p-6 text-black md:px-12">
      <div>
        <h1 className="mb-8 text-3xl font-bold text-black md:text-6xl">
          Contact me <ContactDialog />{" "}
        </h1>
        <div className="flex items-start gap-2">
          <HoverBorderGradient
            containerClassName="rounded-none"
            as="button"
            className="flex items-center space-x-2 bg-white/90 font-extrabold text-black"
            onClick={() => openLink("https://github.com/psalmhe01")}
          >
            <IconBrandGithub stroke={2} color="black" />
            Github
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-none"
            as="button"
            className="flex items-center space-x-2 bg-white/90 font-extrabold text-black"
            onClick={() => openLink("mailto:omosowonesamuel25@gmail.com")}
          >
            <IconBrandGmail stroke={2} color="black" />
            Email
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-none"
            as="button"
            className="flex items-center space-x-2 bg-white/90 font-extrabold text-black"
            onClick={() =>
              openLink("https://www.linkedin.com/in/samuel-omosowone/")
            }
          >
            <IconBrandLinkedin stroke={2} color="black" />
            LinkedIn
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  )
}

function ContactDialog() {
  const [state, handleSubmit] = useForm("xkgqzeey")

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="mb-8 cursor-pointer bg-white p-0 text-3xl font-bold text-gray-500 normal-case hover:bg-white md:text-6xl">
            <SquigglyText stepDuration={90} scale={3}>
              here
            </SquigglyText>
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        {state.succeeded ? (
          <div className="space-y-3">
            <DialogHeader>
              <DialogTitle>Thanks for reaching out</DialogTitle>
              <DialogDescription>
                Your message has been sent. I will get back to you soon.
              </DialogDescription>
            </DialogHeader>
        </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Contact Samuel</DialogTitle>
              <DialogDescription>
                Leave me a message or ask me a question. I will get back to you
                via email ;)
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Lionel Messi" />
              </Field>
              <Field>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="goat@gmail.com"
                />
              </Field>
            </FieldGroup>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here."
              required
            />
            <DialogFooter>
              <DialogClose
                render={
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                }
              />
              <Button type="submit" disabled={state.submitting}>
                {state.submitting ? (
                  <span className="flex items-center gap-2">
                    <Spinner className="size-4" /> Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
