# CLAUDE.md

このファイルは、このリポジトリのコードを操作する際、Claude Code (claude.ai/code) に対するガイダンスを提供します。

## プロジェクト概要

これは Vite + React TypeScript プロジェクトで、Tailwind CSS でスタイリングされています。最新の開発ツール、型安全な React 開発、コード品質ツールで設定されています。

## コマンド

### 開発
- `pnpm dev` - 開発サーバーを起動（HMR 有効）
- `pnpm build` - TypeScript をコンパイルして本番ビルド
- `pnpm preview` - 本番ビルドをローカルでプレビュー

### コード品質
- `pnpm biome check --apply` - Biome でフォーマットと lint（自動修正）
- `pnpm biome format --write` - すべてのファイルを Biome でフォーマット
- `pnpm biome lint --apply` - Lint を実行（自動修正）

## アーキテクチャ

### 技術スタック
- **フレームワーク**: React 19 with TypeScript
- **ビルドツール**: Vite 7
- **スタイリング**: Tailwind CSS v4（@tailwindcss/vite プラグイン経由で最適なパフォーマンス）
- **リンター/フォーマッター**: Biome
- **パッケージマネージャー**: pnpm

### プロジェクト構造
- `src/` - ソースコード
  - `main.tsx` - アプリケーションエントリーポイント（React ルート render）
  - `App.tsx` - ルート React コンポーネント
  - `index.css` - グローバルスタイル
  - `assets/` - 静的アセット（画像など）
- `index.html` - HTML テンプレート
- `vite.config.ts` - React と Tailwind CSS プラグイン付き Vite 設定
- `tsconfig.json` - TypeScript 設定ルート
- `tsconfig.app.json` - アプリ固有の TypeScript 設定（厳格モード有効）
- `biome.json` - コード品質ルール

### 主要設定の詳細

**TypeScript**:
- 厳格モード有効（`"strict": true`）
- 未使用の変数/パラメータはエラー
- ES2022 ターゲット、DOM ライブラリ付き
- React JSX トランスフォーム モード

**Biome**:
- Git 対応（.gitignore を尊重）
- タブインデント
- JavaScript はダブルクォーテーション
- 保存時にインポートを整理
- 推奨ルール有効

**Vite**:
- React プラグイン（Fast Refresh / HMR 対応）
- Tailwind CSS Vite プラグイン（ビルド最適化）

## 開発ノート

- このプロジェクトはパッケージマネージャーに `pnpm` を使用（npm や yarn ではない）
- TypeScript コンパイルは厳格; 未使用の変数やパラメータは削除するか、アンダースコア（_）をプレフィックスとして付ける必要がある
- HMR は開発モードで自動的に機能
- Biome は Git 対応で、.gitignore ファイルを尊重
