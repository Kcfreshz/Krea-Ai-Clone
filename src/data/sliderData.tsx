export type SliderItem = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  buttonText: string;
};

const sliderData: readonly SliderItem[] = [
  {
    id: 1,
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic features.",
    imgSrc: "/img1.webp",
    buttonText: "Try WAN 2.2",
  },
  {
    id: 2,
    title: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate within it in Krea image.",
    imgSrc: "/img2.jpg",
    buttonText: "Try FLUX.1",
  },
  {
    id: 3,
    title: "Ultra-Realistic Portraits",
    description:
      "Create lifelike portraits with accurate skin tones, natural lighting, and smooth textures that look professionally shot.",
    imgSrc: "/img3.webp",
    buttonText: "Generate Portrait",
  },

  {
    id: 4,
    title: "Next-Gen Landscape Rendering",
    description:
      "Bring breathtaking landscapes to life with cinematic skies, lush textures, and realistic depth powered by AI.",
    imgSrc: "/img4.webp",
    buttonText: "Create Landscape",
  },

  {
    id: 5,
    title: "High-Fidelity Concept Art",
    description:
      "Produce detailed concept art for games, films, and comics with perfect composition and consistent style control.",
    imgSrc: "/img5.webp",
    buttonText: "Make Concept Art",
  },
  {
    id: 6,
    title: "AI-Powered Product Mockups",
    description:
      "Turn your product ideas into professional mockups with realistic materials, soft shadows, and perfect lighting.",
    imgSrc: "/img6.webp",
    buttonText: "Design Mockup",
  },

  {
    id: 7,
    title: "Hyper-Real Environments",
    description:
      "Generate immersive 3D-like environments that look ready for AAA video games or photorealistic film scenes.",
    imgSrc: "/img7.webp",
    buttonText: "Build World",
  },

  {
    id: 8,
    title: "Stylized Art Filters",
    description:
      "Transform any photo into cartoon, oil painting, or sketch style while keeping perfect proportions and details.",
    imgSrc: "/img8.webp",
    buttonText: "Apply Style",
  },

  {
    id: 9,
    title: "Precision Prompt Control",
    description:
      "Fine-tune every detail of your prompts with sliders and settings to get exactly the image you imagined.",
    imgSrc: "/img9.webp",
    buttonText: "Start Creating",
  },
];

export default sliderData;
