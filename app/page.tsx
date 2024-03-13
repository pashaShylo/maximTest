"use client";
import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { createUserResult } from "../actions";
import { useSnackbar } from "notistack";

const GamePreferences = () => {
  const [nickName, setNickName] = useState("");
  const [category, setCategory] = useState("");
  const [players, setPlayers] = useState("");
  const [competition, setCompetition] = useState("");
  const [theme, setTheme] = useState("");
  const [duration, setDuration] = useState("");
  const [rulesComplexity, setRulesComplexity] = useState("");
  const [graphicComponents, setGraphicComponents] = useState("");
  const [importantCharacteristic, setImportantCharacteristic] = useState("");
  const [randomElements, setRandomElements] = useState("");
  const [importantFeatures, setImportantFeatures] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async () => {
    try {
      await createUserResult({
        userResults: [
          {
            question: "Яка ваша улюблена категорія ігор?",
            answer: category,
          },
          {
            question: "Скільки гравців зазвичай приймаєте на гру?",
            answer: players,
          },
          {
            question:
              "Як ви більше віддаєте перевагу іграм: змагальні чи співпрацюючі?",
            answer: competition,
          },
          {
            question: "Яка ваша улюблена тематика ігор?",
            answer: theme,
          },
          {
            question: "Яку тривалість гри ви переважаєте?",
            answer: duration,
          },
          {
            question: "Які ваші уподобання стосовно складності правил гри?",
            answer: rulesComplexity,
          },
          {
            question: "Які графічні компоненти гри вас приваблюють найбільше?",
            answer: graphicComponents,
          },
          {
            question: "Яка для вас важлива характеристика ігри?",
            answer: importantCharacteristic,
          },
          {
            question:
              "Як ви ставитеся до використання рандомних елементів у грі?",
            answer: randomElements,
          },
          {
            question: "Які функції вам важливі в грі?",
            answer: importantFeatures,
          },
        ],
        userName: nickName,
      });

      enqueueSnackbar("Ваші відповіді успішно відправлені", {
        variant: "success",
      });
      setNickName("");
      setCategory("");
      setPlayers("");
      setCompetition("");
      setTheme("");
      setDuration("");
      setRulesComplexity("");
      setGraphicComponents("");
      setImportantCharacteristic("");
      setRandomElements("");
      setImportantFeatures("");
    } catch (error) {
      enqueueSnackbar("Введенні дані не коректні", {
        variant: "error",
      });
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <h1>Введіть ваше ім&#39;я</h1>

      <Input
        value={nickName}
        onValueChange={setNickName}
        placeholder="Ваше ім'я"
        size="sm"
      />
      <div>
        <h3>Яка ваша улюблена категорія ігор?</h3>
        <RadioGroup value={category} onValueChange={setCategory}>
          <Radio value="a">a) Стратегічні</Radio>
          <Radio value="b">b) Кооперативні</Radio>
          <Radio value="c">c) Пригодницькі</Radio>
          <Radio value="d">d) Вечірки</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>Скільки гравців зазвичай приймаєте на гру?</h3>
        <RadioGroup value={players} onValueChange={setPlayers}>
          <Radio value="a">a) 2</Radio>
          <Radio value="b">b) 3-4</Radio>
          <Radio value="c">c) 5-6</Radio>
          <Radio value="d">d) 7+</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>
          Як ви більше віддаєте перевагу іграм: змагальні чи співпрацюючі?
        </h3>
        <RadioGroup value={competition} onValueChange={setCompetition}>
          <Radio value="a">a) Змагальні</Radio>
          <Radio value="b">b) Співпрацюючі</Radio>
          <Radio value="c">c) Залежить від настрою</Radio>
          <Radio value="d">d) Не впевнений</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>Яка ваша улюблена тематика ігор?</h3>
        <RadioGroup value={theme} onValueChange={setTheme}>
          <Radio value="a">a) Фантастика</Radio>
          <Radio value="b">b) Фентезі</Radio>
          <Radio value="c">c) Історична</Radio>
          <Radio value="d">d) Сучасність</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>Яку тривалість гри ви переважаєте?</h3>
        <RadioGroup value={duration} onValueChange={setDuration}>
          <Radio value="a">a) Коротка (до 30 хвилин)</Radio>
          <Radio value="b">b) Середня (30-60 хвилин)</Radio>
          <Radio value="c">c) Довга (1-2 години)</Radio>
          <Radio value="d">d) Дуже довга (2+ години)</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>Які ваші уподобання стосовно складності правил гри?</h3>
        <RadioGroup value={rulesComplexity} onValueChange={setRulesComplexity}>
          <Radio value="a">a) Прості та легкі для вивчення</Radio>
          <Radio value="b">
            b) Середні, з можливістю глибшого стратегічного розуміння
          </Radio>
          <Radio value="c">c) Складні, вимагають багато часу на вивчення</Radio>
          <Radio value="d">d) Не має значення</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>Які графічні компоненти гри вас приваблюють найбільше?</h3>
        <RadioGroup
          value={graphicComponents}
          onValueChange={setGraphicComponents}
        >
          <Radio value="a">a) Мінімалістичний дизайн</Radio>
          <Radio value="b">b) Яскраві та кольорові зображення</Radio>
          <Radio value="c">c) Реалістичні малюнки</Radio>
          <Radio value="d">d) Графічні ефекти та деталізація</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>Яка для вас важлива характеристика ігри?</h3>
        <RadioGroup
          value={importantCharacteristic}
          onValueChange={setImportantCharacteristic}
        >
          <Radio value="a">
            a) Відновлюваність (можливість грати багаторазово без
            повторюваності)
          </Radio>
          <Radio value="b">b) Глибина стратегії</Radio>
          <Radio value="c">c) Сюжетність</Radio>
          <Radio value="d">d) Взаємодія з іншими гравцями</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>Як ви ставитеся до використання рандомних елементів у грі?</h3>
        <RadioGroup value={randomElements} onValueChange={setRandomElements}>
          <Radio value="a">a) Позитивно, вони додають несподіваності</Radio>
          <Radio value="b">
            b) Негативно, я віддаю перевагу стратегічному плануванню
          </Radio>
          <Radio value="c">c) Залежить від ситуації</Radio>
          <Radio value="d">d) Не впевнений</Radio>
        </RadioGroup>
      </div>

      <div>
        <h3>Які функції вам важливі в грі?</h3>
        <RadioGroup
          value={importantFeatures}
          onValueChange={setImportantFeatures}
        >
          <Radio value="a">a) Розвага та веселощі</Radio>
          <Radio value="b">b) Розвиток стратегічного мислення</Radio>
          <Radio value="c">c) Спілкування з друзями</Radio>
          <Radio value="d">d) Вивчення нових правил і концепцій</Radio>
        </RadioGroup>
      </div>

      <Button color="primary" onClick={handleSubmit}>
        Відправити результати
      </Button>
    </div>
  );
};

export default GamePreferences;
