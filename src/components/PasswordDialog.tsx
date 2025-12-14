import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePassword } from "@/contexts/PasswordContext";
import { Lock } from "lucide-react";

const PasswordDialog = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    showPasswordDialog,
    setShowPasswordDialog,
    authenticate,
    pendingNavigation,
    setPendingNavigation,
  } = usePassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (authenticate(password)) {
      setShowPasswordDialog(false);
      setPassword("");
      if (pendingNavigation) {
        navigate(pendingNavigation);
        setPendingNavigation(null);
      }
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleClose = () => {
    setShowPasswordDialog(false);
    setPassword("");
    setError("");
    setPendingNavigation(null);
  };

  return (
    <Dialog open={showPasswordDialog} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center">Password Required</DialogTitle>
          <DialogDescription className="text-center">
            Please enter the password to view project details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordDialog;
