// /* eslint-disable import/no-anonymous-default-export */
// export default function (api) {
//   api.cache(true);

//   const presets = [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           node: "14",
//         },
//       },
//     ],
//   ];

//   const plugins = [
//     "add-module-exports",
//     [
//       "inline-dotenv",
//       {
//         path: `./.env.${process.env.NODE_ENV}`,
//         unsafe: true,
//       },
//     ],
//   ];

//   return {
//     presets,
//     plugins,
//   };
// }
