const labenuGroups: string[] = [
   "Newton",
   "Bouman", 
   "Sagan",
   "Hamilton",
   "Julian", 
   "Melo",
   "Turing",
   "Jackson",
   "Tang",
   "Dumont "
]

const customSplice = (
   array: any[],
   index: number,
   deleteCount: number = 1
): any => {
   const removedItems = []

   for (let i = index; i < index + deleteCount; i++) {
      removedItems.push(array[i])
   }

   for (let i = index; i < array.length; i++) {
      array[i] = array[i + deleteCount]
   }

   array.length -= deleteCount

   return removedItems
}

const item = customSplice(labenuGroups, 1, 3)
