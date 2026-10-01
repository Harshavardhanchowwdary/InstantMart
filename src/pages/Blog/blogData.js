import {
    assets,
    categoriesData,
} from "../../assets/assets";


/* =========================================================
   BLOG DATA
========================================================= */

export const blogPosts = [
    {
        id: 1,

        slug: "how-to-build-a-better-weekly-grocery-basket",

        category: "Fresh Living",

        readTime: "4 min read",

        date: "Oct 01, 2026",

        title:
            "How to Build a Better Weekly Grocery Basket",

        description:
            "Simple ways to plan your weekly essentials, reduce waste and keep every grocery run fresh.",

        image:
            categoriesData?.[0]?.image ||
            assets.hero_bg,

        featured: true,

        content: {
            introduction:
                "A good grocery basket is not about buying more. It is about buying the right things in the right quantities. With a little planning, your weekly grocery trip can become simpler, faster and much more intentional.",

            sections: [
                {
                    title:
                        "Start With Your Weekly Routine",

                    paragraphs: [
                        "Before adding items to your basket, think about what your week actually looks like. Consider how many meals you will prepare at home, how many people you are shopping for and which days are likely to be busier.",

                        "This gives you a practical starting point and helps prevent unnecessary purchases that may sit unused in the kitchen.",
                    ],
                },

                {
                    title:
                        "Build Around Everyday Essentials",

                    paragraphs: [
                        "Start your basket with the products you regularly use. Fresh vegetables, fruits, dairy, grains and everyday pantry essentials should form the foundation of your weekly list.",

                        "Once the essentials are covered, you can add snacks, special ingredients and occasional treats without losing track of what your household actually needs.",
                    ],
                },

                {
                    title:
                        "Plan Quantities Carefully",

                    paragraphs: [
                        "Buying larger quantities is not always better. Fresh produce and other perishable foods should be purchased according to realistic weekly consumption.",

                        "A smaller, well-planned basket can reduce food waste while keeping your kitchen stocked with fresher ingredients.",
                    ],
                },

                {
                    title:
                        "Keep Your Basket Flexible",

                    paragraphs: [
                        "A weekly grocery list should guide your shopping rather than restrict it. Seasonal produce, fresh deals and changing meal plans can all influence what you bring home.",

                        "Leave some room for flexible choices while keeping your essential list consistent.",
                    ],
                },
            ],

            conclusion:
                "The best grocery basket is one that matches your real lifestyle. A simple weekly routine, sensible quantities and a focus on everyday essentials can make grocery shopping feel much easier.",
        },
    },

    {
        id: 2,

        slug:
            "a-simple-guide-to-choosing-fresh-produce",

        category: "Healthy Picks",

        readTime: "5 min read",

        date: "Sep 28, 2026",

        title:
            "A Simple Guide to Choosing Fresh Produce",

        description:
            "Learn what to look for when choosing fruits and vegetables for your everyday meals.",

        image:
            categoriesData?.[1]?.image ||
            assets.hero_bg,

        content: {
            introduction:
                "Choosing fresh produce becomes much easier when you know what to look for. A few simple visual and practical checks can help you bring home fruits and vegetables that are ready for your meals.",

            sections: [
                {
                    title:
                        "Look at the Overall Appearance",

                    paragraphs: [
                        "Fresh produce generally has a natural, vibrant appearance. Look for fruits and vegetables that match the expected colour and texture of the variety.",

                        "Avoid items with extensive bruising, excessive moisture or visible signs of deterioration.",
                    ],
                },

                {
                    title:
                        "Check Firmness and Texture",

                    paragraphs: [
                        "Texture can tell you a lot about produce. Some fruits should have a slight give when gently pressed, while vegetables such as carrots and cucumbers should generally feel firm.",

                        "Understanding the expected texture of the food you are buying makes selection much easier.",
                    ],
                },

                {
                    title:
                        "Consider When You Will Eat It",

                    paragraphs: [
                        "Not everything needs to be perfectly ripe when you buy it. If you are planning meals several days ahead, selecting produce at different stages of ripeness can help spread out consumption.",

                        "This simple habit can also help reduce food waste.",
                    ],
                },

                {
                    title:
                        "Store It Properly",

                    paragraphs: [
                        "Good produce can lose quality quickly if stored incorrectly. Separate foods that ripen quickly from items that need cooler or drier conditions.",

                        "Once you understand the storage needs of your regular produce, keeping your groceries fresh becomes much easier.",
                    ],
                },
            ],

            conclusion:
                "Fresh produce selection does not need to be complicated. Pay attention to appearance, texture, ripeness and storage, and you will have a simple system for choosing better everyday produce.",
        },
    },

    {
        id: 3,

        slug:
            "smart-grocery-shopping-without-the-stress",

        category: "Smart Shopping",

        readTime: "4 min read",

        date: "Sep 24, 2026",

        title:
            "Smart Grocery Shopping Without the Stress",

        description:
            "Build a smarter shopping routine with a few simple habits that save time and money.",

        image:
            categoriesData?.[2]?.image ||
            assets.hero_bg,

        content: {
            introduction:
                "Grocery shopping can become stressful when there is no clear plan. A few simple habits can make the entire process more predictable and help you stay focused on what you actually need.",

            sections: [
                {
                    title:
                        "Create Your List Before Shopping",

                    paragraphs: [
                        "A shopping list is one of the simplest ways to reduce unnecessary decisions. Walk through your kitchen first and note what is running low.",

                        "Organising your list by category can make the shopping process even faster.",
                    ],
                },

                {
                    title:
                        "Separate Needs From Wants",

                    paragraphs: [
                        "Not every item that looks interesting needs to go into your basket. Separate everyday essentials from optional purchases.",

                        "This makes it easier to understand your actual grocery spending and gives you more control over your basket.",
                    ],
                },

                {
                    title:
                        "Use Your Existing Ingredients",

                    paragraphs: [
                        "Before buying new ingredients, look at what you already have. Planning one or two meals around existing pantry and refrigerator items can prevent duplicate purchases.",

                        "It also gives older ingredients a better chance of being used before they lose freshness.",
                    ],
                },

                {
                    title:
                        "Keep a Repeatable Routine",

                    paragraphs: [
                        "The goal is not to create a complicated shopping system. A simple routine that you can repeat every week is usually easier to maintain.",

                        "Over time, you will know which products you regularly need and how much you typically consume.",
                    ],
                },
            ],

            conclusion:
                "Smart grocery shopping is mostly about reducing unnecessary decisions. A clear list, realistic quantities and a repeatable routine can make every grocery run feel more manageable.",
        },
    },

    {
        id: 4,

        slug:
            "why-fresh-and-organic-choices-matter",

        category: "Organic Living",

        readTime: "6 min read",

        date: "Sep 20, 2026",

        title:
            "Why Fresh and Organic Choices Matter",

        description:
            "A closer look at everyday choices that can make your kitchen feel fresher and healthier.",

        image:
            categoriesData?.[3]?.image ||
            assets.hero_bg,

        content: {
            introduction:
                "The choices we make while shopping can influence how we cook, store and enjoy food at home. Fresh ingredients and thoughtfully selected products can become part of a more intentional kitchen routine.",

            sections: [
                {
                    title:
                        "Focus on Freshness First",

                    paragraphs: [
                        "Fresh food can make everyday meals feel more enjoyable. Seasonal fruits, vegetables and other fresh ingredients can provide variety throughout the year.",

                        "Rather than trying to change everything at once, start with a few products your household already enjoys.",
                    ],
                },

                {
                    title:
                        "Understand Organic Labels",

                    paragraphs: [
                        "Organic products follow specific production and certification standards that vary by region and product category.",

                        "When choosing organic products, read the label carefully and understand what certification or claim is being provided.",
                    ],
                },

                {
                    title:
                        "Make Practical Choices",

                    paragraphs: [
                        "Healthy grocery habits do not need to be expensive or complicated. Prioritise the foods you use most often and choose options that fit your household's budget and routine.",

                        "Small consistent changes are easier to maintain than dramatic changes that do not fit your lifestyle.",
                    ],
                },

                {
                    title:
                        "Build a Better Kitchen Routine",

                    paragraphs: [
                        "Fresh ingredients work best when paired with good planning and storage. Keep frequently used ingredients visible and organise your refrigerator and pantry so that older items are easy to notice.",

                        "This can help make everyday cooking simpler while reducing unnecessary waste.",
                    ],
                },
            ],

            conclusion:
                "Fresh and organic choices can become part of a thoughtful grocery routine without making shopping complicated. Focus on practical choices that fit your meals, budget and everyday habits.",
        },
    },

    {
        id: 5,

        slug:
            "five-pantry-staples-every-home-needs",

        category: "Kitchen Notes",

        readTime: "3 min read",

        date: "Sep 16, 2026",

        title:
            "Five Pantry Staples Every Home Needs",

        description:
            "Keep your kitchen ready with a simple collection of versatile everyday essentials.",

        image:
            categoriesData?.[4]?.image ||
            assets.hero_bg,

        content: {
            introduction:
                "A useful pantry does not need to be packed with dozens of products. A small collection of versatile staples can give you a strong foundation for everyday meals.",

            sections: [
                {
                    title:
                        "Rice and Grains",

                    paragraphs: [
                        "Rice and other grains are practical foundations for many meals. They can be paired with vegetables, proteins, sauces and spices to create simple dishes.",

                        "Choose varieties that match the meals your household prepares most often.",
                    ],
                },

                {
                    title:
                        "Cooking Oils",

                    paragraphs: [
                        "A dependable cooking oil is useful for everyday preparation. Keep the quantity practical and store it away from excessive heat and direct light.",

                        "If you regularly use different oils for different dishes, keep each one clearly organised.",
                    ],
                },

                {
                    title:
                        "Basic Spices",

                    paragraphs: [
                        "A small selection of commonly used spices can transform simple ingredients into completely different meals.",

                        "Instead of buying every spice available, start with the flavours your household actually uses.",
                    ],
                },

                {
                    title:
                        "Pulses and Legumes",

                    paragraphs: [
                        "Pulses and legumes are versatile pantry ingredients that can be used in soups, curries, salads and other everyday meals.",

                        "Keeping a few dependable options available makes meal planning easier.",
                    ],
                },

                {
                    title:
                        "Long-Lasting Essentials",

                    paragraphs: [
                        "Products such as flour, sugar and other regularly used dry ingredients can provide a useful backup when fresh ingredients are limited.",

                        "Keep these items organised and check their dates regularly.",
                    ],
                },
            ],

            conclusion:
                "A well-planned pantry is about usefulness rather than quantity. Keep a small collection of products that work across multiple meals and replenish them based on actual usage.",
        },
    },

    {
        id: 6,

        slug:
            "keeping-your-groceries-fresh-for-longer",

        category: "Fresh Picks",

        readTime: "5 min read",

        date: "Sep 12, 2026",

        title:
            "Keeping Your Groceries Fresh for Longer",

        description:
            "Small storage changes can make a big difference to the freshness of your groceries.",

        image:
            categoriesData?.[5]?.image ||
            assets.hero_bg,

        content: {
            introduction:
                "Buying fresh groceries is only the first step. How you store them after bringing them home can have a major impact on how long they remain enjoyable to eat.",

            sections: [
                {
                    title:
                        "Organise Your Refrigerator",

                    paragraphs: [
                        "Different areas of a refrigerator can have different temperature and humidity conditions. Keep foods organised according to their storage requirements.",

                        "Avoid overcrowding the refrigerator so that air can circulate properly.",
                    ],
                },

                {
                    title:
                        "Keep Produce Dry When Appropriate",

                    paragraphs: [
                        "Excess moisture can cause some fruits and vegetables to deteriorate more quickly. Where appropriate, keep produce dry and use breathable storage.",

                        "Check stored produce regularly and remove items that are beginning to spoil.",
                    ],
                },

                {
                    title:
                        "Use Older Items First",

                    paragraphs: [
                        "When adding new groceries, move older items toward the front of your refrigerator or pantry.",

                        "This simple first-in, first-out habit makes it easier to remember what should be used first.",
                    ],
                },

                {
                    title:
                        "Store Different Foods Correctly",

                    paragraphs: [
                        "Not every grocery item belongs in the refrigerator. Some products are better stored in a cool, dry pantry, while others require refrigeration.",

                        "Learning the basic storage requirements of the foods you buy regularly can significantly improve your grocery routine.",
                    ],
                },
            ],

            conclusion:
                "Better storage does not require complicated equipment. Simple organisation, appropriate storage conditions and a habit of using older items first can help your groceries stay fresh for longer.",
        },
    },
];



/* =========================================================
   TICKER DATA
========================================================= */

export const tickerItems = [
    "Fresh Picks",
    "Healthy Living",
    "Smart Shopping",
    "Organic Choices",
    "Quick Recipes",
    "Kitchen Notes",
];



/* =========================================================
   HELPERS
========================================================= */

export const getBlogBySlug = (slug) => {

    return blogPosts.find(
        (post) =>
            post.slug === slug
    );
};


export const getRelatedBlogs = (
    currentBlogId,
    limit = 3
) => {

    return blogPosts
        .filter(
            (post) =>
                post.id !== currentBlogId
        )
        .slice(0, limit);
};


export default blogPosts;