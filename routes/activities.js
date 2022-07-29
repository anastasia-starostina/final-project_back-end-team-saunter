import express from 'express';
import {
    getLowBudget,
    getMediumBudget,
    getHighBudget,
    patchSaved,
    getAllBudgets
} from '../models/activities.js';

const router = express.Router();

router.get("/low-budget", async (req, res) => {
    const lowBudget = await getLowBudget();
    res.json({
        success: true,
        data: lowBudget
        });
});

router.get("/medium-budget", async (req, res) => {
    const mediumBudget = await getMediumBudget();
    res.json({
        success: true,
        data: mediumBudget
        });
});

router.get("/high-budget", async (req, res) => {
    const highBudget = await getHighBudget();
    res.json({
        success: true,
        data: highBudget
        });
});

router.get("/all-budgets", async (req, res) => {
  const allBudgets = await getAllBudgets();
  res.json({
    success: true,
    data: allBudgets,
  });
});

router.patch("/low-budget", async function (req, res) {
    const activity = req.body;
    const data = await patchSaved(activity);
    res.json({ 
        success: true, 
        payload: data 
    });
});

router.patch("/medium-budget", async function (req, res) {
    const activity = req.body;
    const data = await patchSaved(activity);
    res.json({ 
        success: true, 
        payload: data 
    });
});

router.patch("/high-budget", async function (req, res) {
    const activity = req.body;
    const data = await patchSaved(activity);
    res.json({ 
        success: true, 
        payload: data 
    });
});

export default router;