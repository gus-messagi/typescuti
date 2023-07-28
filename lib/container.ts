import { type constructor } from './types'

const instances: Record<string, unknown> = {}

export const resolve = <T>(ClassConstructor: constructor<T>): T => {
  if (ClassConstructor.inject == null) return new ClassConstructor()

  const dependencies = ClassConstructor.inject.map((Dependency) => Dependency.name)

  for (const Dependency of ClassConstructor.inject) {
    const dependecyName = Dependency.name

    if (instances[dependecyName]) continue

    if (Dependency.inject == null) {
      instances[dependecyName] = new Dependency()
      continue
    }

    const resolvedClass = resolve<typeof Dependency>(Dependency)
    instances[dependecyName] = resolvedClass
  }

  const className = ClassConstructor.name

  if (instances[className] == null) {
    instances[className] = new ClassConstructor(...dependencies.map(value => instances[value]))
  }

  return instances[className] as T
}
