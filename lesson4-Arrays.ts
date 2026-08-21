// Lesson 4 - Arrays in TypeScript!

const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

const trainAutobots = async (autobots: string[]) => {
  for(let bots of autobots) {
    console.log(`Training ${bots}...`);

    await sleep(3000);
  }
}

trainAutobots(["Orion Pax Silica", "Megatron", "Bumble Humvee"]);