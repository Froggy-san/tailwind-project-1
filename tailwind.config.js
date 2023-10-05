/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        papayawhip: {
          light: "#fef4e4",
          DEFAULT: "#ffefd5",
          dark: "#fee5bc",
        },
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

// Pasted from page
// extend: {
// screens: {
// widescreen: { raw: "(min-aspect-ratio: 3/2)" },
// tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
// },
// What do you want to do with the text?
// i want you to explain it.
// Generating answer using selected text

// Generating answer using selected text

// Searching for: extend screens in tailwindcss

// Searching for: extend screens in tailwindcss

// Generating answers for you…

// Generating answers for you…

// The selected text is a part of the tailwind.config.js file, which is used to customize the Tailwind CSS framework. The text shows how to extend the screens property, which defines the breakpoints for responsive design. The text adds two custom breakpoints: widescreen and tallscreen, which are based on the aspect ratio of the screen. The raw keyword means that the value is a raw CSS media query, not a min-width value. This way, you can use Tailwind’s screen modifiers (like widescreen:text-xl) to apply styles based on the screen’s aspect ratio.

// Learn more:
// 1. stackoverflow.com
// 2. tailwindcss.com
// 3. material-tailwind.com
// 4. stackoverflow.com
// 5. stackoverflow.com
// +3 more
// what about this part? (min-aspect-ratio: 3/2)
// Searching for: (min-aspect-ratio: 3/2)

// Searching for: (min-aspect-ratio: 3/2)

// Generating answers for you…

// Generating answers for you…

// This part is a CSS media query that uses the aspect-ratio feature to apply styles based on the width-to-height ratio of the viewport1. The min-aspect-ratio: 3/2 means that the styles will only apply when the viewport’s aspect ratio is at least 3/2, which is equivalent to 1.5. For example, if the viewport’s width is 900px, then the height must be 600px or less for the styles to apply. This feature can be useful for creating responsive layouts that adapt to different screen sizes and orientations.

// Learn more:
// 1. developer.mozilla.org
// 2. developer.mozilla.org
// 3. w3schools.com
// 4. bootstrap-vue.org
// +2 more
// can't it be done with normal media query?
// Generating answers for you…

// Generating answers for you…

// Yes, it can be done with a normal media query, but using the aspect-ratio feature can make it easier and more concise. For example, instead of writing something like this:

// CSS
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// @media (min-width: 900px) and (max-height: 600px) {
//   /* styles for widescreen */
// }
// You can write something like this:

// CSS
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// @media (min-aspect-ratio: 3/2) {
//   /* styles for widescreen */
// }
// This way, you don’t have to specify the exact width and height values, and you can use the same media query for different screen sizes that have the same aspect ratio.

// are the numbers fixed, or should i be able to calculate them, if so on what bases should i be calculating them on?
// Generating answers for you…

// Generating answers for you…

// The numbers are not fixed, they are based on the screen’s width and height in pixels. You can calculate them by dividing the width by the height and simplifying the fraction. For example, if the screen’s width is 1920px and the height is 1080px, then the aspect ratio is 1920/1080, which can be simplified to 16/9. This means that the screen’s width is 16 units and the height is 9 units. You can use this method to find the aspect ratio of any screen size.

// so 3/2 is what in pixels?
// Generating answers for you…

// Generating answers for you…

// 3/2 is not a fixed pixel value, it is a ratio that compares the screen’s width and height. It means that for every 3 pixels of width, there are 2 pixels of height. For example, a screen with a resolution of 1200x800 pixels has an aspect ratio of 3/2, because 1200/800 = 3/2. However, a screen with a resolution of 1600x900 pixels does not have an aspect ratio of 3/2, because 1600/900 = 16/9. The pixel values can vary depending on the screen size and resolution, but the ratio remains the same.

// am watching a coruse on tailwaind and the teacher chose those 2 aspect raito, and i was wondering if there is a specific reason as to why he did,  widescreen: { raw: "(min-aspect-ratio: 3/2)" },
//         tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
// Generating answers for you…

// Generating answers for you…

// I think the teacher chose those two aspect ratios because they are common and useful for responsive design. The 3/2 aspect ratio is often used for widescreen devices, such as laptops, tablets, and monitors. The 1/2 aspect ratio is often used for tallscreen devices, such as smartphones, e-readers, and smartwatches. By using these two aspect ratios, the teacher can show how to create layouts that adapt to different screen orientations and sizes.

// last thing, how can i add a custom media query?
// Searching for: add custom media query in tailwindcss

// Searching for: add custom media query in tailwindcss

// Generating answers for you…

// Generating answers for you…

// There are two ways to add a custom media query in Tailwind CSS. One way is to use the @media directive in your tailwind.css file, and the other way is to extend the screens property in your tailwind.config.js file.

// The first way is to use the @media directive followed by the media query you want to target. For example, if you want to apply some styles only when the screen width is between 600px and 900px, you can write something like this in your tailwind.css file:

// CSS
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// @media (min-width: 600px) and (max-width: 900px) {
//   /* styles for medium screens */
// }
// Inside the media query, you can add additional CSS rules specific to that media query. You can also use Tailwind’s utility classes with the @apply directive. For example, if you want to change the text color to red on medium screens, you can write something like this:

// CSS
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// @media (min-width: 600px) and (max-width: 900px) {
//   .text-red-medium {
//     @apply text-red-500;
//   }
// }
// Then you can use the .text-red-medium class in your HTML elements.

// The second way is to extend the screens property in your tailwind.config.js file. This way, you can define custom breakpoints for your project and use them with Tailwind’s screen modifiers. For example, if you want to add a custom breakpoint called medium that corresponds to the same media query as above, you can write something like this in your tailwind.config.js file:

// module.exports = {
//   theme: {
//     extend: {
//       screens: {
//         medium: '600px',
//       },
//     },
//   },
// };

// Then you can use the medium screen modifier with any Tailwind utility class. For example, if you want to change the text color to red on medium screens, you can write something like this:

// HTML
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// <div class="text-blue-500 medium:text-red-500">
//   This text is blue on small screens and red on medium screens.
// </div>
// You can also use raw CSS media queries with the raw keyword in your tailwind.config.js file. This gives you full control over the generated media query. For example, if you want to add a custom breakpoint called tall that applies when the screen height is at least 800px, you can write something like this:

// module.exports = {
//   theme: {
//     extend: {
//       screens: {
//         tall: { raw: '(min-height: 800px)' },
//       },
//     },
//   },
// };

// Then you can use the tall screen modifier with any Tailwind utility class. For example, if you want to change the font size to large on tall screens, you can write something like this:

// HTML
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// <div class="text-sm tall:text-lg">
//   This text is small on short screens and large on tall screens.
// </div>
// For more information about customizing screens in Tailwind CSS, you can refer to this documentation or this question. I hope this helps! 😊

// Learn more:
// 1. tailwindcss.com
// 2. stackoverflow.com
// 3. devhubby.com
// +1 more
// he also add this in the input.css , @layer utilities {
//     .section-min-height {
//         min-height: calc(100vh - 68px)
//     }
// } , is that becasue he wanted to add his on values?
// Searching for: @layer utilities in tailwindcss

// Searching for: @layer utilities in tailwindcss

// Generating answers for you…

// Generating answers for you…

// Yes, that is correct. The teacher added this custom utility class to the input.css file because he wanted to use his own value for the min-height property. By using the @layer utilities directive, he told Tailwind that this class belongs to the utilities layer, which means it will be moved to the same place as the @tailwind utilities directive in the final CSS output. This way, he can use this class in his HTML elements with the same syntax as the built-in Tailwind utility classes. For example, he can write something like this:

// HTML
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// <div class="section-min-height bg-gray-100">
//   <!-- some content -->
// </div>
// This div element will have a minimum height of 100vh minus 68px, which is the height of the header element. This is useful for creating full-screen sections that fit the viewport height. You can learn more about adding new utilities in Tailwind CSS from this documentation.

// Learn more:
// 1. v2.tailwindcss.com
// 2. tailwindcss.com
// 3. v1.tailwindcss.com
// 4. stackoverflow.com
// +2 more
// ok, why did he type
// why did he type @layer?
// Searching for: @layer in tailwindcss

// Searching for: @layer in tailwindcss

// Generating answers for you…

// Generating answers for you…

// He typed @layer because he wanted to tell Tailwind which “bucket” a set of custom styles belong to. Valid layers are base, components, and utilities. By using the @layer directive, Tailwind will automatically move the CSS within any @layer directive to the same place as the corresponding @tailwind rule, so you don’t have to worry about authoring your CSS in a specific order to avoid specificity issues1. Any custom CSS added to a layer will only be included in the final build if that CSS is actually used in your HTML, just like all of the classes built in to Tailwind by default1. Wrapping any custom CSS with @layer also makes it possible to use modifiers with those rules, like hover: and focus: or responsive modifiers like md: and lg:1. You can learn more about the @layer directive from this documentation or this article.

// Learn more:
// 1. tailwindcss.com
// 2. tailwindcss.com
// 3. css-tricks.com
// 4. stackoverflow.com
// 5. v2.tailwindcss.com
// 6. v1.tailwindcss.com
// +4 more
// so if i ever want to add another custom value i type @layer and then the custom class?
// Generating answers for you…

// Generating answers for you…

// Yes, that is correct. If you want to add another custom value to the utilities layer, you can type @layer utilities and then the custom class name and the CSS rules you want to apply. For example, if you want to add a custom utility class called .text-shadow that adds a shadow effect to the text, you can write something like this in your input.css file:

// CSS
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// @layer utilities {
//   .text-shadow {
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//   }
// }
// Then you can use the .text-shadow class in your HTML elements with the same syntax as the built-in Tailwind utility classes. For example, you can write something like this:

// HTML
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// <h1 class="text-4xl text-shadow">
//   This is a heading with a shadow effect.
// </h1>
// You can also use modifiers with your custom utility classes, such as hover:, focus:, or responsive modifiers like sm:, md:, lg:, etc. For example, if you want to add a shadow effect only when the user hovers over the text, you can write something like this:

// CSS
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// @layer utilities {
//   .hover\:text-shadow:hover {
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//   }
// }
// Then you can use the hover:text-shadow class in your HTML elements. For example, you can write something like this:

// HTML
// This code is AI-generated. Review and use carefully. Visit our FAQ for more information.

// <h1 class="text-4xl hover:text-shadow">
//   This is a heading with a shadow effect on hover.
// </h1>
// You can learn more about adding new utilities in Tailwind CSS from [this documentation] or [this question]. I hope this helps! 😊
