let bankBranchInstance = null;

class BankBranch {
  constructor(branchInfo) {
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    } else {

      return bankBranchInstance;
    }
  }
  getBranchInfo() {
    return this.branchInfo;
  }
}
const branchA = new BankBranch({
  name: "Town branch",
  address: "123 Green street",
});
const branchB = new BankBranch({
  name: "Suburb branch",
  address: "789 Gold street",
});
console.log(branchA.getBranchInfo());

console.log(branchB.getBranchInfo());
console.log(branchA === branchB);