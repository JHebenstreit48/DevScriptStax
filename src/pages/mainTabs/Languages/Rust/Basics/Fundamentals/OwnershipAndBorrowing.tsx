import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OwnershipAndBorrowing = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Fundamentals/OwnershipAndBorrowing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ownership & Borrowing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OwnershipAndBorrowing;
