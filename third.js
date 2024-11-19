/*
*  @param dependencies
*  @param fetcher
*  @returns {Promise<void>}
*/
async function buildDependencyTree(dependencies, fetcher) {
  async function getDependencies(name) {
    let count = 1;
    while (count <= 3) {
      try {
        return await fetcher(name);
      } catch (error) {
        if (count == 3) {
          throw error;
        }
        count++;
      }
    }
  }

  async function buildTree(node) {
    for (let package of Object.keys(node)) {
      const response = await getDependencies(package);
      node[package] = {};

      for (let dependency of response.dependencies) {
        node[package][dependency] = {};
        await buildTree(node[package]);
      }
    }
  }
  
  await buildTree(dependencies);
}
module.exports = buildDependencyTree


// Функция-заглушка для имитации запроса к API
async function fetcher(packageName) {
  // Имитация задержки запроса
  await new Promise(resolve => setTimeout(resolve, 500));

  // Возвращаем некоторые имитационные данные о зависимостях пакета
  if (packageName === 'package-a') {
    return {
      dependencies: ['package-b', 'package-c']
    };
  } else if (packageName === 'package-b') {
    return {
      dependencies: ['package-d']
    };
  } else if (packageName === 'package-c') {
    return {
      dependencies: ['package-e']
    };
  } else {
    return {
      dependencies: []
    };
  }
}

// Пример использования функции buildDependencyTree
const dependencies = {
  'package-a': {},
};

// Вызываем функцию для построения дерева зависимостей
buildDependencyTree(dependencies, fetcher)
  .then(() => console.log(JSON.stringify(dependencies, null, 2)))
  .catch(error => console.error('Произошла ошибка:', error));