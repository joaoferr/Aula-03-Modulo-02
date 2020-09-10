import express from 'express';
import { promises } from 'fs';
import moment from 'moment';
const { writeFile, readFile } = promises;
import {
  addGrade,
  updateGrade,
  deleteGrade,
  findGrade,
  sumGrade,
  avgGrade,
  sortGrade,
} from '../controllers/gradesControllers.js';

const router = express.Router();

router.get('/addGrade', async (req, res) => {
  try {
    let grades = req.body;
    res.send(await addGrade(grades));
  } catch (err) {
    res.sendStatus(400).send({ error: err.message });
  }
});

router.get('/updateGrade', async (req, res) => {
  try {
    let grades = req.body;
    res.send(await updateGrade(grades));
  } catch (err) {
    res.sendStatus(400).send({ error: err.message });
  }
});

router.get('/deleteGrade', async (req, res) => {
  try {
    let grades = req.body;
    res.send(await deleteGrade(grades));
  } catch (err) {
    res.sendStatus(400).send({ error: err.message });
  }
});

router.get('/findGrade', async (req, res) => {
  try {
    let grades = req.body;
    res.send(await findGrade(grades));
  } catch (err) {
    res.sendStatus(400).send({ error: err.message });
  }
});

router.get('/sumGrade', async (req, res) => {
  try {
    let grades = req.body;
    res.send(await sumGrade(grades));
  } catch (err) {
    res.sendStatus(400).send({ error: err.message });
  }
});

router.get('/avgGrade', async (req, res) => {
  try {
    let grades = req.body;
    res.send(await avgGrade(grades));
  } catch (err) {
    res.sendStatus(400).send({ error: err.message });
  }
});

router.get('/sortGrade', async (req, res) => {
  try {
    let grades = req.body;
    res.send(await sortGrade(grades));
  } catch (err) {
    res.sendStatus(400).send({ error: err.message });
  }
});

export default router;
