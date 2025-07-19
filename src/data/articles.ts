import { Article } from "../types";

export const authors = {
  seun: {
    id: "seun",
    name: "Seun Abilawon",
    title: "Founder & Product Engineer",
    role: "Sole Contributor",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
};

export const articles: Article[] = [
  {
    id: "1",
    title: "Navigating the AI Talent Landscape",
    description:
      "As a recruitment company, we've been at the center of this shift as we help enterprises and startups navigate their AI talent needs.",
    category: "Technology",
    date: "June 05, 2025",
    image:
      "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "The world is experiencing an AI revolution—but behind every groundbreaking innovation, there's a human story. While headlines focus on what AI can do, there's a quieter but pressing conversation happening in job markets, universities, and Slack channels around the globe: Do we have the right talent to build and sustain this future?",
      sections: [
        {
          id: "talent-gap",
          title: "The Talent Gap: Not Just About Quantity",
          content:
            "It's tempting to think the solution lies in hiring more data scientists or launching another AI bootcamp. But the real issue is more nuanced. Companies don't just want people who know AI—they want people who can apply it meaningfully in real-world contexts.\n\nThere's also a growing need for hybrid talent: professionals who blend technical expertise with domain knowledge, ethical awareness, and strategic thinking. An AI engineer who understands the healthcare system or a product designer fluent in machine learning workflows is far more valuable than someone who's technically sound but disconnected from context.\n\nAnd then there's the pace. AI evolves faster than traditional job markets can adapt. Skills that were relevant two years ago may not be enough today. Roles are being redefined constantly—from machine learning engineers to prompt engineers and AI ethicists.",
        },
        {
          id: "why-companies-struggle",
          title: "Why Companies Struggle to Hire",
          content:
            "For many companies, especially those outside the tech giants, hiring AI talent feels like trying to catch lightning in a bottle. Compensation wars aside, many promising candidates are drawn to environments that offer more than just a paycheck—they want purpose, autonomy, and the infrastructure to build and experiment without constraints.\n\nSome organizations also miss the mark by focusing too much on credentials instead of capability. AI is still a field where passion projects, open-source contributions, and curiosity often signal potential better than a degree ever could.\n\nThe most successful companies don't just recruit—they invest. They create cultures where learning is embedded, ethical debates are welcome, and cross-functional collaboration is the norm.",
        },
        {
          id: "standing-out",
          title: "For Talent: Standing Out in the Crowd",
          content:
            "If you're trying to break into AI—or grow within it—it's not enough to chase trends. What stands out is your ability to build, explain, and align your work with broader impact.\n\nCan you take a complex model and explain its value to non-technical stakeholders? Can you identify potential bias in a dataset and suggest alternatives? Can you ship a product, not just prototype it?\n\nReal-world experience matters. So does curiosity. And increasingly, so does your ability to think critically about why you're building what you're building.",
        },
        {
          id: "road-ahead",
          title: "The Road Ahead",
          content:
            "The AI talent landscape is still young, and that's what makes it exciting. New roles will emerge. Older ones will evolve. And the people who thrive will be those who stay open to learning, aren't afraid to pivot, and care deeply about the intersection of technology and humanity.\n\nThis isn't just about getting a job. It's about shaping the future of intelligence—with all the responsibility that comes with it.",
        },
        {
          id: "final-thought",
          title: "Final thought",
          content:
            "We often talk about AI as if it's an autonomous force. But the truth is, AI will only be as smart, fair, and impactful as the people behind it. Navigating the AI talent landscape means recognizing that human potential—not just machine power—is the real driving force.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "talent-gap", title: "The Talent Gap: Not Just About Quantity" },
      { id: "why-companies-struggle", title: "Why Companies Struggle to Hire" },
      { id: "standing-out", title: "For Talent: Standing Out in the Crowd" },
      { id: "road-ahead", title: "The Road Ahead" },
      { id: "final-thought", title: "Final thought" },
    ],
  },
  {
    id: "2",
    title: "Building Resilient Business Strategies",
    description:
      "Learn how to build business strategies that can withstand market volatility and drive sustainable growth in uncertain times.",
    category: "Technology",
    date: "June 03, 2025",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "In today's rapidly changing business landscape, resilience isn't just an advantage—it's a necessity. Companies that thrive are those that can adapt, pivot, and maintain their core strengths while navigating uncertainty.",
      sections: [
        {
          id: "building-resilience",
          title: "Building Organizational Resilience",
          content:
            "Resilient businesses share common characteristics: they diversify revenue streams, invest in their people, and maintain strong financial reserves. They also cultivate a culture of adaptability and continuous learning.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      {
        id: "building-resilience",
        title: "Building Organizational Resilience",
      },
    ],
  },
  {
    id: "3",
    title: "Essential AI Tools for Modern Businesses",
    description:
      "Discover the AI tools that are transforming how businesses operate, from automation to analytics and customer service.",
    category: "AI Tools",
    date: "June 01, 2025",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "Artificial Intelligence is no longer a futuristic concept—it's a present reality that's reshaping industries. From chatbots to predictive analytics, AI tools are becoming essential for competitive advantage.",
      sections: [
        {
          id: "automation-tools",
          title: "Automation and Workflow Tools",
          content:
            "AI-powered automation tools can handle repetitive tasks, freeing up human resources for more strategic work. These tools range from simple chatbots to complex workflow automation systems.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "automation-tools", title: "Automation and Workflow Tools" },
    ],
  },
  {
    id: "4",
    title: "Strategic Planning in the Digital Age",
    description:
      "How digital transformation is reshaping strategic planning and what leaders need to know to stay ahead.",
    category: "Technology",
    date: "May 28, 2025",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "Digital transformation has fundamentally changed how businesses plan for the future. Traditional strategic planning cycles are being replaced by more agile, data-driven approaches.",
      sections: [
        {
          id: "digital-strategy",
          title: "Developing Digital-First Strategies",
          content:
            "Modern strategic planning must account for rapid technological change, shifting customer expectations, and the need for continuous adaptation.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "digital-strategy", title: "Developing Digital-First Strategies" },
    ],
  },
  {
    id: "5",
    title: "Machine Learning Tools for Beginners",
    description:
      "A comprehensive guide to getting started with machine learning tools and platforms for business applications.",
    category: "AI Tools",
    date: "May 25, 2025",
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "Machine learning doesn't have to be intimidating. With the right tools and platforms, businesses of all sizes can harness the power of ML to improve operations and decision-making.",
      sections: [
        {
          id: "getting-started",
          title: "Getting Started with ML Platforms",
          content:
            "Popular platforms like TensorFlow, PyTorch, and cloud-based solutions make machine learning more accessible than ever before.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "getting-started", title: "Getting Started with ML Platforms" },
    ],
  },
  {
    id: "6",
    title: "Customer-Centric Business Models",
    description:
      "How to build business strategies that put customers at the center of everything you do.",
    category: "Business Strategies",
    date: "May 22, 2025",
    image:
      "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "Customer-centricity isn't just a buzzword—it's a fundamental shift in how successful businesses operate. Companies that truly understand and serve their customers outperform their competitors.",
      sections: [
        {
          id: "customer-focus",
          title: "Building Customer-First Culture",
          content:
            "Creating a customer-centric culture requires more than just good intentions—it requires systematic changes to processes, metrics, and incentives.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "customer-focus", title: "Building Customer-First Culture" },
    ],
  },
  {
    id: "7",
    title: "Data Analytics Platforms Comparison",
    description:
      "Compare the leading data analytics platforms and find the right solution for your business needs.",
    category: "AI Tools",
    date: "May 20, 2025",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "Choosing the right data analytics platform can make or break your data strategy. With so many options available, it's important to understand the strengths and limitations of each.",
      sections: [
        {
          id: "platform-comparison",
          title: "Comparing Leading Platforms",
          content:
            "From Tableau to Power BI, each platform offers unique features and capabilities. Understanding these differences is key to making the right choice.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "platform-comparison", title: "Comparing Leading Platforms" },
    ],
  },
  {
    id: "8",
    title: "Innovation Management Strategies",
    description:
      "Learn how to foster innovation within your organization and manage the innovation process effectively.",
    category: "Business Strategies",
    date: "May 18, 2025",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "Innovation isn't just about having great ideas—it's about creating systems and cultures that consistently turn ideas into value. Successful innovation management requires both structure and flexibility.",
      sections: [
        {
          id: "innovation-process",
          title: "Structuring the Innovation Process",
          content:
            "Effective innovation management balances creative freedom with strategic direction, ensuring that innovative efforts align with business objectives.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "innovation-process", title: "Structuring the Innovation Process" },
    ],
  },
  {
    id: "9",
    title: "Chatbot Development Best Practices",
    description:
      "Essential guidelines for building effective chatbots that enhance customer experience and drive business value.",
    category: "AI Tools",
    date: "May 15, 2025",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: authors.seun,
    content: {
      introduction:
        "Chatbots have evolved from simple rule-based systems to sophisticated AI-powered assistants. Building effective chatbots requires understanding both the technology and user experience principles.",
      sections: [
        {
          id: "chatbot-design",
          title: "Designing User-Friendly Chatbots",
          content:
            "Great chatbots feel natural and helpful. They understand context, provide relevant responses, and know when to escalate to human agents.",
        },
      ],
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "chatbot-design", title: "Designing User-Friendly Chatbots" },
    ],
  },
];
