import { ExecOptions } from "child_process";
import { exec } from "shelljs";

export {
  cat,
  cd,
  chmod,
  cp,
  pushd,
  popd,
  dirs,
  echo,
  exec,
  find,
  grep,
  ln,
  ls,
  mkdir,
  mv,
  pwd,
  rm,
  sed,
  set,
  tempdir,
  test,
  touch,
  which,
  exit,
  error,
  env,
  config,
  ShellString,
  ExecOptions,
  ExecOutputReturnValue,
  ShellArray,
  ShellReturnValue
} from "shelljs";

export function asyncExec(
  command: string,
  options: ExecOptions = {}
): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(
      command,
      { async: false, ...options },
      (code: number, stdout: string, stderr: string) => {
        if (code !== 0) {
          const e: Error = new Error();
          e.message = stderr;
          e.name = String(code);
          reject(e);
        } else {
          resolve(stdout);
        }
      }
    );
  });
}
