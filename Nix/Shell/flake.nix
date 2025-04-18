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
          pkgs.dotnet-sdk_9
          pkgs.dotnet-runtime_9
        ];

        shellHook = "clear; exec nu";
      };
    };
  };
}
