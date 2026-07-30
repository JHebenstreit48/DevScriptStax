import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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