import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PrototypeAndInheritance = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/ObjectOrientedProgramming/PrototypeAndInheritance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Prototype and Inheritance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PrototypeAndInheritance;
