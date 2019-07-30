/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import chair from '../assets/images/chair.png';
import aliConnors from '../assets/images/ali-connors.jpg';
import radio from '../assets/images/radio.png';
import sandraAdams from '../assets/images/sandra-adams.jpg';
import sunnies from '../assets/images/sunnies.png';
import zach from '../assets/images/zach.jpg';
import beachball from '../assets/images/beachball.png';
import peterCarlsson from '../assets/images/peter-carlsson.jpg';
import clock from '../assets/images/clock.png';
import popsicle from '../assets/images/popsicle.png';
import angelaDuckworth from '../assets/images/angela-duckworth.jpg';
import greenShoes from '../assets/images/green-shoes.png';
import chucks from '../assets/images/chucks.png';
import brush from '../assets/images/brush.png';
import lawnChair from '../assets/images/lawn_chair.png';
import fishBowl from '../assets/images/fish_bowl.png';
import lipstick from '../assets/images/lipstick.png';
import heels from '../assets/images/heels.png';
import binoculars from '../assets/images/binoculars.png';
import flippers from '../assets/images/flippers.png';
import surfboard from '../assets/images/surfboard.png';
import backpack from '../assets/images/backpack.png';
import helmet from '../assets/images/helmet.png';
import teapot from '../assets/images/teapot.png';

const categories = [
  {
    id: 1,
    name: 'Feature',
    featuredProduct: {
      title: 'Green comfort chair',
      quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
      imageUrl: chair,
      storeName: 'Ali’s shop',
      storeAvatarUrl: aliConnors,
      price: '$300',
    },
    products: [
      {
        id: 1,
        title: 'Vintage Bluetooth Radio',
        description: 'Isn’t it cool when things look old, but their not. Looks Old But Not makes awesome vintage goods that are super smart. This ol’ radio just got an upgrade. Connect to it with an app and jam out to some top forty.',
        imageUrl: radio,
        price: '$300',
        storeName: 'Sandra’s shop',
        storeAvatarUrl: sandraAdams,
        storeDescription: 'Sandra specializes in furniture, beauty and travel products with a classic vibe. Custom orders are available if you’re looking for a certain color or material.',
        featured: false
      },
      {
        id: 2,
        title: 'Sunglasses',
        description: 'Be an optimist. Carry Sunglasses with you at all times. All Tints and Shades products come with polarized lenses and super duper UV protection so you can look at the sun for however long you want. Sunglasses make you look cool, wear them.',
        imageUrl: sunnies,
        price: '$70',
        storeName: 'Trevor’s shop',
        storeAvatarUrl: zach,
        storeDescription: 'Trevor Hanson sources housewares and styles from just about everywhere. Super cool and extra awesome all of his shop’s goods are handmade with love.',
        featured: false
      },
      {
        id: 3,
        title: 'Beachball',
        description: 'Are you at a baseball game and feeling bored? At a pool party and looking for a laugh? Do you need something to take your anger out on? Beachball, by inflatable fun, is the perfect outlet.',
        imageUrl: beachball,
        price: '$25',
        storeName: 'Peter’s shop',
        storeAvatarUrl: peterCarlsson,
        storeDescription: 'Peter makes great stuff for awesome people like you.  Super cool and extra awesome all of his shop’s goods are handmade with love. Custom orders are available upon request if you need something extra special.',
        featured: false
      }
    ],
  },
  {
    id: 2,
    name: 'Latest',
    featuredProduct: {
      title: 'Beautiful little teapot',
      quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
      imageUrl: beachball,
      storeName: 'Trevor’s shop',
      storeAvatarUrl: zach,
      price: '$300',
    },
    products: [
      {
        id: 1,
        title: 'Clock',
        description: 'Timekeeper Co makes clocks that tell time precisely. Clock is very simple to use, set the time using your phone, hang it, and viola! You’ll never be late again.',
        imageUrl: clock,
        price: '$120',
        storeName: 'Trevor’s shop',
        storeAvatarUrl: zach,
        storeDescription: 'Trevor Hanson sources housewares and styles from just about everywhere. Super cool and extra awesome all of his shop’s goods are handmade with love.',
        featured: false
      },
      {
        id: 2,
        title: 'Red Popsicle',
        description: 'Looks can be deceiving. This Red Popsicle comes in a wide variety of flavors, including strawberry, that burst as soon as it hits the mouth. Red Popsicles melt slow, so savor the flavor.',
        imageUrl: popsicle,
        price: '$300',
        storeName: 'Stella’s shop',
        storeAvatarUrl: angelaDuckworth,
        storeDescription: 'Stella sells awesome stuff at lovely prices. made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.',
        featured: false
      },
      {
        id: 3,
        title: 'Green Slip-ons',
        description: 'Feetsy has been making extraordinary slip-ons for decades. With each pair of shoes purchased Feetsy donates a pair to those in need. Buy yourself a pair, buy someone else a pair. Very Comfortable.',
        imageUrl: greenShoes,
        price: '$75',
        storeName: 'Sandra’s shop',
        storeAvatarUrl: sandraAdams,
        storeDescription: 'Sandra specializes in furniture, beauty and travel products with a classic vibe. Custom orders are available if you’re looking for a certain color or material.',
        featured: false
      },
    ],
  },
  {
    id: 3,
    name: 'Fashion',
    featuredProduct: {
      title: 'Original Sunnies For U',
      quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
      imageUrl: chucks,
      storeName: 'Sandra’s shop',
      storeAvatarUrl: sandraAdams,
      price: '$300',
    },
    products: [
      {
        id: 1,
        title: 'Teapot',
        description: 'Impress your guests with Teapot by Kitchen Stuff. Teapot holds extremely hot liquids and pours them from the spout. Use the handle, shown on the left, so your fingers don’t get burnt while pouring.',
        imageUrl: teapot,
        price: '$210',
        storeName: 'Ali’s shop',
        storeAvatarUrl: aliConnors,
        storeDescription: 'Ali Connor’s makes custom goods for folks of all shapes and sizes made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.',
        featured: false
      },
      {
        id: 2,
        title: 'Blue suede shoes',
        description: 'Who needs pants when you have shoes! Blue suede shoes were meant to go dancing in, so you may want to pick up a few of these. These things are stylish.',
        imageUrl: chucks,
        price: '$89',
        storeName: 'Trevor’s shop',
        storeAvatarUrl: zach,
        storeDescription: 'Trevor Hanson sources housewares and styles from just about everywhere. Super cool and extra awesome all of his shop’s goods are handmade with love.',
        featured: true
      },
      {
        id: 3,
        title: 'Dipped Brush',
        description: 'WeDipIt does it again. This handle dipped 4 inch brush is a perfect for painting 4 inch lines, or coloring in big areas with paint. Just be sure you don’t drop it in a bucket of red paint, then it won’t look dipped anymore.',
        imageUrl: brush,
        price: '$25',
        storeName: 'Stella’s shop',
        storeAvatarUrl: angelaDuckworth,
        storeDescription: 'Stella sells awesome stuff at lovely prices. made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.',
        featured: true
      },
    ],
  },
  {
    id: 4,
    name: 'Furniture',
    featuredProduct: {
      title: 'Folding Chair',
      quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
      imageUrl: lawnChair,
      storeName: 'Stella’s shop',
      storeAvatarUrl: angelaDuckworth,
      price: '$300',
    },
    products: [
      {
        id: 1,
        title: 'Perfect Goldfish Bowl',
        description: 'The Perfect Bowl Co makes the best bowls for just about anything you can think of. This Perfect Goldfish Bowl holds water and fish perfectly. Looks great in living rooms. Keep out of reach from cats.',
        imageUrl: fishBowl,
        price: '$25',
        storeName: 'Ali’s shop',
        storeAvatarUrl: aliConnors,
        storeDescription: 'Ali Connor’s makes custom goods for folks of all shapes and sizes made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.',
        featured: false
      },
      {
        id: 2,
        title: 'Red Lipstick Set',
        description: 'Trying to find the perfect shade to match your mood? Try no longer. Red Lipstick Set by StickLips has you covered for those nights when you need to get out, or even if you’re just headed to work.',
        imageUrl: lipstick,
        price: '$25',
        storeName: 'Sandra’s shop',
        storeAvatarUrl: sandraAdams,
        storeDescription: 'Sandra specializes in furniture, beauty and travel products with a classic vibe. Custom orders are available if you’re looking for a certain color or material.',
        featured: false
      },
    ],
  },
  {
    id: 5,
    name: 'Beauty',
    featuredProduct: {
      title: 'Better wearing heels',
      quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
      imageUrl: heels,
      storeName: 'Peter’s shop',
      storeAvatarUrl: peterCarlsson,
      price: '$300',
    },
    products: [
      {
        id: 1,
        title: 'Old Binoculars',
        description: 'These Binoculars by See Through are amazing and can make things that are really far away seem like they’re right in front of you. Bring them to the beach. Now you can buy the cheap seats at the big game and feel like you’re right in the action.',
        imageUrl: binoculars,
        price: '$25',
        storeName: 'Stella’s shop',
        storeAvatarUrl: angelaDuckworth,
        storeDescription: 'Stella sells awesome stuff at lovely prices. made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.',
        featured: false
      },
    ]
  },
  {
    id: 6,
    name: 'Food',
    featuredProduct: {
      title: 'Red Popsicle',
      quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
      imageUrl: popsicle,
      storeName: 'Trevor’s shop',
      storeAvatarUrl: zach,
      price: '$300',
    },
    products: [
      {
        id: 1,
        title: 'Lime Flippers',
        description: 'Flippers are a nice tool to have when you’re being chased by an oversized sea turtle. Never get caught again with these fast water shoes. You’re like a fish, but more graceful.',
        imageUrl: flippers,
        price: '$25',
        storeName: 'Peter’s shop',
        storeAvatarUrl: peterCarlsson,
        storeDescription: 'Peter makes great stuff for awesome people like you.  Super cool and extra awesome all of his shop’s goods are handmade with love. Custom orders are available upon request if you need something extra special.',
        featured: true
      },
      {
        id: 2,
        title: 'Surfboard',
        description: 'Who says you can’t walk on water? With Surfboard, by Surfboard Supply, you can fly on water. This beast is fast and handles like a porsche. Hang Ten Bro!',
        imageUrl: surfboard,
        price: '$25',
        storeName: 'Stella’s shop',
        storeAvatarUrl: angelaDuckworth,
        storeDescription: 'Stella sells awesome stuff at lovely prices. made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.',
        featured: true
      },
    ],
  },
  {
    id: 7,
    name: 'Travel',
    featuredProduct: {
      title: 'Best gift for the traveler',
      quote: 'Leave the tunnel and the rain is fallin amazing things happen when you wait',
      imageUrl: backpack,
      storeName: 'Sandra’s shop',
      storeAvatarUrl: sandraAdams,
      price: '$300',
    },
    products: [
      {
        id: 1,
        title: 'Backpack',
        description: 'This backpack by Bags ‘n’ stuff can hold just about anything: a laptop, a pen, a protractor, notebooks, small animals, plugs for your devices, sunglasses, gym clothes, shoes, gloves, two kittens, and even lunch!',
        imageUrl: backpack,
        price: '$25',
        storeName: 'Peter’s shop',
        storeAvatarUrl: peterCarlsson,
        storeDescription: 'Peter makes great stuff for awesome people like you.  Super cool and extra awesome all of his shop’s goods are handmade with love. Custom orders are available upon request if you need something extra special.',
        featured: false
      },
      {
        id: 2,
        title: 'Half Shield Helmet',
        description: 'Half Shield is the right helmet for those warm summer days on the road. Dot approved, these helmets have been rigorously tested. Keep that noggin protected.',
        imageUrl: helmet,
        price: '$25',
        storeName: 'Ali’s shop',
        storeAvatarUrl: aliConnors,
        storeDescription: 'Ali Connor’s makes custom goods for folks of all shapes and sizes made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.',
        featured: false
      },
      {
        id: 3,
        title: 'Beachball',
        description: 'Are you at a baseball game and feeling bored? At a pool party and looking for a laugh? Do you need something to take your anger out on? Beachball, by inflatable fun, is the perfect outlet.',
        imageUrl: beachball,
        price: '$25',
        storeName: 'Peter’s shop',
        storeAvatarUrl: peterCarlsson,
        storeDescription: 'Peter makes great stuff for awesome people like you.  Super cool and extra awesome all of his shop’s goods are handmade with love. Custom orders are available upon request if you need something extra special.',
        featured: false
      },
    ],
  }
];

export { categories };
