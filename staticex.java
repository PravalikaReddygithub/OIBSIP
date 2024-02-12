class staticvm
{
static int age;
static string name;
int sal;
static void disp(){
system.out.println("Age is:"+age);
system.out.println("Name is:"+name);
}
void show(){
system.out.println("Ex for static keyword");
system.out.println("salary is:"+sal);
}
}
class staticex{
public static void main(string args[])
{
staticvm.age=30;
staticvm.name="Ramesh";
vm.sal=10000;
vm.show();
}
}