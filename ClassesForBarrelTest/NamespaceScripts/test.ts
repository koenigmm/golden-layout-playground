namespace TestNamespace {
    import person = Person;
    import tester = Tester;
    import color = COLOR;
    let p1 = new Person(12, "Tester");
    let t1 = new Tester("Tester", 12, 1);
    p1.printPerson();
    t1.printPerson();
    p1.color = color.FUCHSIA;

}