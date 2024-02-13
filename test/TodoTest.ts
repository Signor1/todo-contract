import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Testing Todos", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployTodo() {
    
    const Todo = await ethers.getContractFactory("Todos");
    const todo = await Todo.deploy();
    return { todo, Todo };
  }

  

  describe("Deployment", function () {
    it("Should check if contract exist", async function () {
      const { todo } = await loadFixture(deployTodo);
      expect(todo).to.exist;
    });

    it("Should check if a new todo is created", async function () {
      const { todo } = await loadFixture(deployTodo);
      //constants for testing
      const title = "Read", desc = "I want to read in the evening";
      const tx = await todo.addTodoItem(title, desc);
      expect(await todo.getTodoLen()).to.equal(1);
    });

    

    // it("Should fail if the unlockTime is not in the future", async function () {
    //   // We don't use the fixture here because we want a different deployment
    //   const latestTime = await time.latest();
    //   const Lock = await ethers.getContractFactory("Lock");
    //   await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
    //     "Unlock time should be in the future"
    //   );
    // });
  });

  describe("Reverted transaction instance", function () {
    it("Update title should fail on wrong index input", async function () {
      const { todo } = await loadFixture(deployTodo);
      const tx = todo.updateTodoTitle("Working", 3);
      await expect(tx).to.be.revertedWith('You entered an incorrect value');
    });

    it("Update description should fail on wrong index input", async function () {
      const { todo } = await loadFixture(deployTodo);
      const tx = todo.updateTodoDesc("I will work today", 3);
      await expect(tx).to.be.revertedWith('You entered an incorrect value');
    });

    it("Update status should fail on wrong index input", async function () {
      const { todo } = await loadFixture(deployTodo);
      const tx = todo.updateTodoStatus(3);
      await expect(tx).to.be.revertedWith('You entered an incorrect value');
    });

    it("Remove todo item by index should fail on wrong index input", async function () {
      const { todo } = await loadFixture(deployTodo);
      const tx = todo.removeTodoItem(4);
      await expect(tx).to.be.revertedWith('You entered an incorrect value');
    });
  })
  // describe("Withdrawals", function () {
  //   describe("Validations", function () {
  //     it("Should revert with the right error if called too soon", async function () {
  //       const { lock } = await loadFixture(deployOneYearLockFixture);

  //       await expect(lock.withdraw()).to.be.revertedWith(
  //         "You can't withdraw yet"
  //       );
  //     });

  //     it("Should revert with the right error if called from another account", async function () {
  //       const { lock, unlockTime, otherAccount } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       // We can increase the time in Hardhat Network
  //       await time.increaseTo(unlockTime);

  //       // We use lock.connect() to send a transaction from another account
  //       await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
  //         "You aren't the owner"
  //       );
  //     });

  //     it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
  //       const { lock, unlockTime } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       // Transactions are sent using the first signer by default
  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw()).not.to.be.reverted;
  //     });
  //   });

    // describe("Events", function () {
    //   it("Should emit an event on withdrawals", async function () {
    //     const { lock, unlockTime, lockedAmount } = await loadFixture(
    //       deployOneYearLockFixture
    //     );

    //     await time.increaseTo(unlockTime);

    //     await expect(lock.withdraw())
    //       .to.emit(lock, "Withdrawal")
    //       .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
    //   });
    // });

  //   describe("Transfers", function () {
  //     it("Should transfer the funds to the owner", async function () {
  //       const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw()).to.changeEtherBalances(
  //         [owner, lock],
  //         [lockedAmount, -lockedAmount]
  //       );
  //     });
  //   });
  // });
});
