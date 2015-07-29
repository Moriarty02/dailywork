1.
如果变量与执行上下文相关，那变量自己应该知道它的数据存储在哪里，并且知道如何访问。这种机制称为变量对象(variable object)
2.
变量对象(variable object) 是与执行上下文相关的 数据作用域(scope of data) 。
它是与上下文关联的特殊对象，用于存储被定义在上下文中的 变量(variables) 和 函数声明(function declarations) 。
a this value is a property of the execution context, but not a property of the variable object.
this是执行上下文环境的一个属性，而不是某个变量对象的属性