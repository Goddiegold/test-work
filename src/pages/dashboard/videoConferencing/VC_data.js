import MrUyi from "../../../assets/mr_uyi.png";
import Oluseyi from "../../../assets/Oluseyi.png";
import Ibukun from "../../../assets/Ibukun.png";
import Paul from "../../../assets/Paul.png";
import Lady from "../../../assets/Lady.png";

const Data = {
    participants: [
        {
            img: Paul,
            isMute: false,
            Name: "Paul",
            videoOn: false,
            chats : [
                {
                    sender: "Paul",
                    message: "Hi Everyone",
                    time: "00:12"
                },
                {
                    sender: "You",
                    message: "Hi Everyone",
                    time: "00:15"
                },
                {
                    sender: "Paul",
                    message: "How you doing",
                    time: "00:18"
                },
            ]
        },
        {
            img: MrUyi,
            isMute: true,
            Name: "Uyi Moses",
            videoOn: true,
            chats: [
                {
                    sender: "Uyi Moses",
                    message: "Hi Everyone",
                    time: "00:12"
                },
                {
                    sender: "You",
                    message: "Hi Everyone",
                    time: "00:15"
                },
                {
                    sender: "Uyi Moses",
                    message: "How you doing",
                    time: "00:18"
                },
            ] 
        },
        {
            img: Ibukun,
            isMute: true,
            Name: "Ibukun",
            videoOn: false,
            chats: [
                {
                    sender: "Ibukun",
                    message: "Hi Everyone",
                    time: "00:12"
                },
                {
                    sender: "You",
                    message: "Hi Everyone",
                    time: "00:15"
                },
                {
                    sender: "Ibukun",
                    message: "How you doing",
                    time: "00:18"
                },
            ]
        },
        {
            img: Lady,
            isMute: false,
            Name: "Ibukun",
            videoOn: false,
            chats: [
                {
                    sender: "Ibukun",
                    message: "Hi Everyone",
                    time: "00:12"
                },
                {
                    sender: "You",
                    message: "Hi Everyone",
                    time: "00:15"
                },
                {
                    sender: "Ibukun",
                    message: "How you doing",
                    time: "00:18"
                },
            ]
        },
        {
            img: Oluseyi,
            isMute: false,
            Name: "Oluseyi",
            videoOn: true,
            chats: [
                {
                    sender: "Oluseyi",
                    message: "Hi Everyone",
                    time: "00:12"
                },
                {
                    sender: "You",
                    message: "Hi Everyone",
                    time: "00:15"
                },
                {
                    sender: "Oluseyi",
                    message: "How you doing",
                    time: "00:18"
                },
            ],
        }
    ],
    GC: [
        {
            sender: "Oluseyi",
            message: "Good Afternoon Everyone",
            time: "00:12"
        },
        {
            sender: "Oluseyi",
            message: "We will start this meeting",
            time: "00:13"
        },
        {
            sender: "Ibukun",
            message: "Yes, Let’s start this meeting",
            time: "00:12"
        },
        {
            sender: "You",
            message: "Hey Everyone",
            time: "00:13"
        },
        {
            sender: "Paul",
            message: "Hi Everyone",
            time: "00:14"
        },
        {
            sender: "Paul",
            message: "Today, we are here to discuss Dano Vs Peak.",
            time: "00:30"
        }
    ],
    
}

export default Data;