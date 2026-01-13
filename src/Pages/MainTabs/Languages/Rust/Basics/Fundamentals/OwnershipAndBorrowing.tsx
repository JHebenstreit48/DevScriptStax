import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OwnershipAndBorrowing = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Fundamentals/OwnershipAndBorrowing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ownership & Borrowing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OwnershipAndBorrowing;
