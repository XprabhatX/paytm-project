"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { NumInput } from "@repo/ui/numinput";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");

    return <div className="h-[90vh]">
        <Center>
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <NumInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async() => {
                            const { message } = await p2pTransfer(number, amount);
                            setMessage(message);
                        }}>Send</Button>
                    </div>
                    {
                        (message != "") && <div className="bg-gray-200 px-4 py-1 rounded-md">{message}</div>
                    }
                    
                </div>
            </Card>
        </Center>
    </div>
}