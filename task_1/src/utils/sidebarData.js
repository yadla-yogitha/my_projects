import { FaAddressCard, FaChartPie, FaDumbbell, FaHome, FaList } from "react-icons/fa";

export const sidebarData = [
    {
        "name": "Home",
        "link": "home",
        "icon": <FaHome />
    },
    {
        "name": "Workouts",
        "link": "exercises",
        "icon": <FaDumbbell />
    },
    {
        "name": "Statistics",
        "link": "statistics",
        "icon": <FaChartPie />
    },
    {
        "name": "Warm-Up Exercises",
        "link": "warmup-exercises",
        "icon": <FaList />
    },
    {
        "name": "Give Feedback",
        "link": "form",
        "icon": <FaAddressCard />
    }
]