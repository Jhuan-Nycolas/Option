{
  description = "Option's Nix Flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";

    pkgs = import nixpkgs {inherit system;};
  in {
    devShells.${system} = {
      default = pkgs.mkShell {
        packages = [
          pkgs.jdk
        ];

        shellHook = "clear; ${pkgs.figlet}/bin/figlet Option Project; exec fish";
      };
    };
  };
}
