"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn, profileFormSchema } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createProfile } from "@/app/api/user/create/route";
import { redirect, useRouter } from "next/navigation";

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    console.log("run");
    try {
      await createProfile(name);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      router.push("/");
    }
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <>
      <Input onChange={(e) => setName(e.target.value)} placeholder="Nimantha" />

      <Button onClick={handleSubmit} type="submit">
        Update profile
      </Button>
    </>
  );
}
