import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InheritanceExtends = () => {
  const markdownFilePath =
    'Languages/TypeScript/Intermediate/ClassesAndInheritance/InheritanceExtends';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Intermediate - Inheritance & Extends" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InheritanceExtends;